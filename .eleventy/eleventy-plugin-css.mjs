import browserslist from 'browserslist';
import { browserslistToTargets, transform, bundle } from 'lightningcss';
import fs from 'fs';
import path from 'path';

export default function pluginCss(eleventyConfig) {
  const targets = browserslistToTargets(browserslist());







  eleventyConfig.addExtension('css', {
    outputFileExtension: 'css',
    compile(inputContent, inputPath) {
      console.log('css');

      const { code, map, exports } = transform({
        filename: inputPath,
        code: Buffer.from(inputContent),
        cssModules: true,
        minify: false,
        sourceMap: false,
        targets
      });

      console.log('=> file:', inputPath, '=>', code.toString(), exports);

      return async function(data) {
        return code.toString();
      };
    },
  });


}
