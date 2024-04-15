export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/sign-in",
      disallow: "/sign-up",
      disallow: "/check-out",
      disallow: "/download-history",
      disallow: "/login-history",
      disallow: "/reset-password",
      disallow: "/forgot-password",
    },
    sitemap: "https://examprince.com/sitemap.xml",
  };
}
