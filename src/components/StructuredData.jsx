import { Helmet } from "react-helmet-async";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Pieropan",
  url: "https://forgemind.eu",
  description:
    "Independent developer creating practical software, AI automation and digital solutions through ForgeMind.",
  knowsAbout: [
    "Artificial Intelligence",
    "Workflow Automation",
    "Web Development",
    "Mobile Application Development",
    "JavaScript",
    "React",
    "Supabase",
    "n8n",
  ],
  brand: {
    "@type": "Brand",
    name: "ForgeMind",
    url: "https://forgemind.eu",
  },
};

export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}