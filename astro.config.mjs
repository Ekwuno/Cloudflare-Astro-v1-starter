import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
	site: `http://astro.build`,
	output: "server",
	adapter: cloudflare({ mode: "directory" }),
});
