import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import { compileTsx } from './.eleventy/index.mjs';

import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export const config = {
  dir: {
    input: 'src',
    output: 'dist',
    includes: '_includes',
  }
};

const viteOptions = {
  css: {
    transformer: 'lightningcss',
    lightningcss: {
			targets: browserslistToTargets(browserslist()),
			drafts: {
				customMedia: true,
			},
			cssModules: {
				pattern: '[hash]_[local]',
			},
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash].[ext]',  // CSSやJSなどのアセットの出力パスを定義
      },
    },
  },
};

export default function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: false,
    watch: ['src/**/*.{ts,tsx,css,scss}'],
  });

  eleventyConfig.addBundle("css");
  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');

  // eleventyConfig.addPlugin(EleventyVitePlugin, viteOptions);
  eleventyConfig.addPlugin(compileTsx);

  // console.log('=>', eleventyConfig);
}
