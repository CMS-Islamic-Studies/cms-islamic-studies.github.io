// @ts-check
import { defineConfig } from 'astro/config';

/** GitHub Actions sets PUBLIC_BASE_PATH like /repo-name — must end with / or links become .../repo-nameimam-schedule */
function basePath() {
  const raw = process.env.PUBLIC_BASE_PATH ?? '';
  if (raw === '' || raw === '/') return '/';
  return raw.endsWith('/') ? raw : `${raw}/`;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://cms-islamic-studies.github.io',
  base: basePath(),
});
