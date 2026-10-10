/**
 * The public address of the site, used for canonical links, the sitemap and
 * social previews. Set SITE_URL once you have a domain; otherwise the address
 * the host provides (Netlify or Vercel) is used.
 */
function resolveSiteUrl(): string {
  const candidates = [
    process.env.SITE_URL,
    process.env.URL, // Netlify
    process.env.VERCEL_PROJECT_PRODUCTION_URL &&
      `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
  ];
  const found = candidates.find((value): value is string => Boolean(value));
  return (found ?? "http://localhost:3000").replace(/\/+$/, "");
}

export const siteUrl = resolveSiteUrl();
