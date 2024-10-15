import browserslist from 'browserslist';
import { browserslistToTargets, transform, bundle } from 'lightningcss';
import fs from 'fs';
import path from 'path';
import sass from 'sass'

export function compileCss(eleventyConfig) {
  const targets = browserslistToTargets(browserslist());

  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    async compile(inputContent, inputPath) {
      console.log('=> css:', inputPath, inputContent);

      return async function() {
        const { code, map, exports } = bundle({
          filename: inputPath,
          code: Buffer.from(inputContent),
          cssModules: true,
          minify: false,
          sourceMap: false,
          targets
        });
        return code;
      }
    },
  });
}
