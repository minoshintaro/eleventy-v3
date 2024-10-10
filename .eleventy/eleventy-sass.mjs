import path from 'path';
import * as sass from 'sass'
import { browserslistToTargets, transform } from 'lightningcss';

export default function (eleventyConfig, targets) {
	// eleventyConfig.addTemplateFormats('scss');

  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: async function(inputContent, inputPath) {
      const parsedPath = path.parse(inputPath);
      if (parsedPath.name.startsWith('_')) return;

      const result = sass.compileString(inputContent, {
        loadPaths: [parsedPath.dir || "."],
        sourceMap: false,
        style: 'compressed',
      });

      this.addDependencies(inputPath, result.loadedUrls);

      return async () => {
        const { code } = await transform({
          code: Buffer.from(result.css),
          minify: false,
          sourceMap: false,
          targets: browserslistToTargets(targets),
        });
        return code;
      };
    },
  });
}
