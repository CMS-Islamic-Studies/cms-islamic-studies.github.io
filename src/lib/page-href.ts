/**
 * Internal page URL under Astro `base` (GitHub Pages root or project subpath).
 * Trailing slash matches `trailingSlash: 'always'` and directory `index.html` on static hosts.
 */
export function pageHref(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmed = path.replace(/^\/+|\/+$/g, '');
  if (!trimmed) return base;
  return `${base}${trimmed}/`;
}
