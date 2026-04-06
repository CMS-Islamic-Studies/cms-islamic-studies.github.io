// @ts-check
import { defineConfig } from "astro/config";

/**
 * CI sets PUBLIC_BASE_PATH:
 * - Empty → site at https://ORG.github.io/ (repo name must be ORG.github.io)
 * - /repo-name/ → project Pages at https://ORG.github.io/repo-name/
 * Trailing slash avoids broken joins like .../repopathsegment.
 */
function basePath() {
  const raw = process.env.PUBLIC_BASE_PATH ?? "";
  if (raw === "" || raw === "/") return "/";
  return raw.endsWith("/") ? raw : `${raw}/`;
}

// https://astro.build/config
export default defineConfig({
  site: "https://cms-islamic-studies.github.io",
  base: basePath(),
  // GitHub Pages serves `path/index.html`; trailing-slash URLs match reliably.
  trailingSlash: "always",
});
