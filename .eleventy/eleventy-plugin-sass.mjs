import browserslist from 'browserslist';
import path from 'path';
import sass from 'sass'
import { browserslistToTargets, transform } from 'lightningcss';

export default function pluginSass(eleventyConfig) {
  const targets = browserslistToTargets(browserslist());

  eleventyConfig.addExtension(['css'], {
    outputFileExtension: 'css',
    compile(inputContent, inputPath) {
      console.log('=> file:', inputPath, inputContent);
      const result = sass.compileString(inputContent);

      return async function(data) {
        return result.css;
      };
    },
  });

  eleventyConfig.addExtension(['scss'], {
    outputFileExtension: 'css',
    compile(inputContent, inputPath) {
      console.log('=> file:', inputPath, inputContent);
      const result = sass.compileString(inputContent);

      return async function(data) {
        return result.css;
      };
    },
  });


    // compile: async function(inputContent, inputPath) {
    //   console.log('file:', inputContent);
    //
    //   const parsedPath = path.parse(inputPath);
    //   if (parsedPath.name.startsWith('_')) return;
    //
    //   const result = sass.compileString(inputContent, {
    //     loadPaths: [parsedPath.dir || "."],
    //     sourceMap: false,
    //     style: 'compressed',
    //   });
    //
    //   this.addDependencies(inputPath, result.loadedUrls);
    //
    //   return async () => {
    //     const { code } = await transform({
    //       code: Buffer.from(result.css),
    //       minify: false,
    //       sourceMap: false,
    //       targets
    //     });
    //     return code;
    //   };
    // },

}
