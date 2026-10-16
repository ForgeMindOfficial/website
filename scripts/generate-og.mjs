import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));

const input = path.join(root, "social-preview.html");
const output = path.join(root, "public", "og-image.jpg");

await mkdir(path.dirname(output), { recursive: true });

const browser = await chromium.launch();

try {
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
    deviceScaleFactor: 1,
  });

  await page.goto(`file://${input}`, {
    waitUntil: "load",
  });

  await page.screenshot({
    path: output,
    type: "jpeg",
    quality: 92,
    fullPage: false,
  });

  console.log("ForgeMind OG image generated:", output);
} finally {
  await browser.close();
}