import { defineConfig } from 'astro/config';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY?.split('/')[0];
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' && repo && owner;

export default defineConfig({
  site: isGitHubPages ? `https://${owner}.github.io` : 'https://example.com',
  base: isGitHubPages ? `/${repo}` : '/',
});
