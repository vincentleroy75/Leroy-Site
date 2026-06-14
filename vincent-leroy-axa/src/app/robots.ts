import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/mentions-legales", "/politique-confidentialite"],
      },
    ],
    sitemap: "https://www.vincentleroy-axa.fr/sitemap.xml",
  };
}
