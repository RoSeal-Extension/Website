import { defineConfig } from "astro/config";
import solidPlugin from "@astrojs/solid-js";

import compressPlugin from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	build: {
		format: "file",
	},
	site: "https://www.roseal.live",
	integrations: [
		solidPlugin({
			devtools: true,
		}),
		sitemap({
			filter: (page) =>
				!page.includes("friend-invite") &&
				!page.includes("connection-invite"),
		}),
		compressPlugin(),
	],
});
