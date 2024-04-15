export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/products",
        "/setting",
        "/login-history",
        "/download-history",
        "/invoices",
        "/te-access/*",
        "/sc-access/*",
      ],
    },
    sitemap: "https://examprince.com/sitemap.xml",
  };
}
