import sassPlugin from './.eleventy/eleventy-sass.mjs';
import tsxPlugin from './.eleventy/eleventy-tsx.mjs';
import 'tsx/esm';

export const config = {
  dir: {
    input: 'src',
    output: 'dist',
    includes: '_includes',
  }
};

export default function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ['src/**/*.{ts,tsx,scss}'],
  });

  eleventyConfig.addTemplateFormats('scss');
  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');

  eleventyConfig.addPlugin(sassPlugin);
  eleventyConfig.addPlugin(tsxPlugin);
}
