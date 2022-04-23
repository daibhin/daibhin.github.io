const withMDX = require("@next/mdx")();

module.exports = withMDX({
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? "/personal-site/" : "",
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
