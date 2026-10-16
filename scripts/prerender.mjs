import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const DIST = path.join(ROOT, "dist");
const PORT = 4178;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const routes = [
  "/",
  "/projects/newsglow",
  "/projects/staff-app",
  "/projects/business-automation",
];

const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt++) {
    try {
      const response = await fetch(BASE_URL);

      if (response.ok) return;
    } catch {
      // Server not ready yet.
    }

    await wait(200);
  }

  throw new Error("Preview server did not start.");
}

const server = spawn(
  process.execPath,
  [
    "node_modules/vite/bin/vite.js",
    "preview",
    "--host",
    "127.0.0.1",
    "--port",
    String(PORT),
    "--strictPort",
  ],
  {
    cwd: ROOT,
    stdio: "ignore",
  }
);

let browser;

try {
  await waitForServer();

  browser = await chromium.launch({
    headless: true,
  });

  for (const route of routes) {
    const page = await browser.newPage();

    await page.goto(`${BASE_URL}${route}`, {
      waitUntil: "networkidle",
    });

await page.waitForFunction(
  (expectedPath) => {
    const canonicals = [
      ...document.querySelectorAll('link[rel="canonical"]'),
    ];

    const ogTitles = [
      ...document.querySelectorAll('meta[property="og:title"]'),
    ];

    return (
      canonicals.some(
        (element) =>
          element.getAttribute("href") ===
          `https://forgemind.eu${expectedPath}`
      ) &&
      ogTitles.some(
        (element) => Boolean(element.getAttribute("content"))
      )
    );
  },
  route,
  { timeout: 15000 }
);

// ==========================================
// FORGEMIND — SEO NORMALIZATION
// ==========================================

await page.evaluate((route) => {
  const SITE_URL = "https://forgemind.eu";
  const expectedUrl = `${SITE_URL}${route}`;

  // Select the SEO elements belonging to the current route.
  const canonicalElements = [
    ...document.head.querySelectorAll('link[rel="canonical"]'),
  ];

  const routeCanonical = canonicalElements.find(
    (element) => element.href === expectedUrl
  );

  if (!routeCanonical) {
    throw new Error(`Missing route-specific canonical: ${expectedUrl}`);
  }

  // Helmet-managed elements are marked with data-rh="true".
  // Prefer these instead of relying on their position.
  const selectors = [
    "title",
    'meta[name="description"]',
    'link[rel="canonical"]',
    'meta[property="og:type"]',
    'meta[property="og:site_name"]',
    'meta[property="og:title"]',
    'meta[property="og:description"]',
    'meta[property="og:url"]',
    'meta[property="og:image"]',
    'meta[name="twitter:card"]',
    'meta[name="twitter:title"]',
    'meta[name="twitter:description"]',
    'meta[name="twitter:image"]',
    'meta[name="robots"]',
  ];

  for (const selector of selectors) {
    const elements = [
      ...document.head.querySelectorAll(selector),
    ];

    if (elements.length <= 1) continue;

    const active =
      elements.find((element) => element.getAttribute("data-rh") === "true") ??
      elements[0];

    for (const element of elements) {
      if (element !== active) {
        element.remove();
      }
    }
  }

  // Ensure canonical URL matches the current route.
  const canonical = document.head.querySelector(
    'link[rel="canonical"]'
  );

  canonical.href = expectedUrl;

  // Ensure Open Graph URL matches the current route.
  let ogUrl = document.head.querySelector(
    'meta[property="og:url"]'
  );

  if (!ogUrl) {
    ogUrl = document.createElement("meta");
    ogUrl.setAttribute("property", "og:url");
    document.head.appendChild(ogUrl);
  }

  ogUrl.setAttribute("content", expectedUrl);
}, route);

const html = await page.content();

    const relativePath =
      route === "/"
        ? "index.html"
        : path.join(route.slice(1), "index.html");

    const outputPath = path.join(DIST, relativePath);

    await mkdir(path.dirname(outputPath), {
      recursive: true,
    });

    await writeFile(outputPath, html, "utf8");

    console.log(`Prerendered: ${route}`);

    await page.close();
  }

  console.log("ForgeMind prerendering completed.");
} finally {
  if (browser) {
    await browser.close();
  }

  server.kill();
}