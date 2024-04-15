export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/sign-in",
    },
    sitemap: "https://examprince.com/sitemap.xml",
  };
}
