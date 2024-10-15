import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { compileCss, compileTsx } from './.eleventy/index.mjs';

export const config = {
  dir: {
    input: 'src',
    output: 'dist',
    includes: '_includes',
  }
};

const viteOptions = {
  css: {
    modules: {
      scopeBehaviour: 'local', // グローバルではなくローカルスコープに設定
      generateScopedName: '[name]__[local]___[hash:base64:5]', // クラス名の生成ルール
    },
  },
  // css: {
  //   transformer: 'lightningcss',
  //   lightningcss: {
	// 		targets: browserslistToTargets(browserslist()),
	// 		drafts: {
	// 			customMedia: true,
	// 		},
	// 		cssModules: {
	// 			pattern: '[hash]_[local]',
	// 		},
  //   },
  // },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: 'assets/[name].[hash].[ext]',  // CSSやJSなどのアセットの出力パスを定義
  //     },
  //   },
  // },
};

export default function(eleventyConfig) {
  eleventyConfig.setServerOptions({
    liveReload: true,
    domDiff: false,
    watch: ['src/**/*.{ts,tsx,css,scss}'],
  });

  eleventyConfig.addPlugin(EleventyVitePlugin, viteOptions);

  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');
  eleventyConfig.addPlugin(compileTsx);

  eleventyConfig.addTemplateFormats('css');
  eleventyConfig.addPlugin(compileCss);

  // console.log('=>', eleventyConfig);
}
