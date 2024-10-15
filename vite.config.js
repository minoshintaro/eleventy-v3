import { eleventyPlugin } from "vite-plugin-eleventy";

export default {
  plugins: [eleventyPlugin()],
  root: "src",
  build: {
    outDir: "../dist",
  }
}
