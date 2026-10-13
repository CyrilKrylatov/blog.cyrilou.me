import path from "node:path";

export default {
	tags: [
		"posts"
	],
	"layout": "layouts/post.njk",
	permalink: (data) => `/${path.basename(data.page.inputPath, path.extname(data.page.inputPath))}/`,
};
