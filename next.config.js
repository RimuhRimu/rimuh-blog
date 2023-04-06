/** @type {import('next').NextConfig} */
// next.config.js
const rehypePrettyCode = require("rehype-pretty-code");

const options = {
  // Use one of Shiki's packaged themes
  theme: "nord",
  // Or your own JSON theme

  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ["word"];
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
