import tsxPlugin from './.eleventy/eleventy-tsx.mjs';
import 'tsx/esm';

export const config = {
  dir: {
    input: 'src',
    output: 'dist',
    includes: './_includes',
  }
};

export default function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: false,
    watch: ['src/**/*.{ts,tsx,scss}', '_includes/**/*.{ts,tsx}'],
  });

  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');
  eleventyConfig.addPlugin(tsxPlugin);

  // console.log('eleventyConfig', eleventyConfig);
}
