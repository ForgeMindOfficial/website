import { Helmet } from "react-helmet-async";

const SITE_URL = "https://forgemind.eu";

const DEFAULT_TITLE =
  "ForgeMind — Digital Solutions by Daniel Pieropan";

const DEFAULT_DESCRIPTION =
  "Independent digital solutions studio specializing in AI automation, web applications, mobile development and practical software solutions.";

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = "/og-image.jpg",
  type = "website",
}) {
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const imageUrl = new URL(image, SITE_URL).toString();

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:site_name"
        content="ForgeMind"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={imageUrl}
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />

      <meta
        name="robots"
        content="index, follow"
      />
    </Helmet>
  );
}