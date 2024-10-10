import browserslist from 'browserslist';
import pluginSass from './.eleventy/eleventy-sass.mjs';
import pluginTsx from './.eleventy/eleventy-tsx.mjs';
import 'tsx/esm';

const targets = browserslist('> 0.2% and not dead');

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

  eleventyConfig.addPlugin(pluginSass, targets);
  eleventyConfig.addPlugin(pluginTsx);
}
