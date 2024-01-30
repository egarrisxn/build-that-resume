export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://build-that-resume.vercel.app/sitemap.xml",
  };
}
