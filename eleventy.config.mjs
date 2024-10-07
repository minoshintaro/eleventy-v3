import 'tsx/esm';
import browserslist from 'browserslist';
import path from 'path';
import prettier from 'prettier';
import sass from 'sass';
import { jsxToString } from 'jsx-async-runtime';
import { browserslistToTargets, transform } from 'lightningcss';

const targets = browserslist('> 0.2% and not dead');

export default function (eleventyConfig) {
  eleventyConfig.addWatchTarget('src/**/*.tsx');
  eleventyConfig.addWatchTarget('src/**/*.css');
  eleventyConfig.addWatchTarget('src/**/*.scss');

  // # TSX
  // - テンプレート形式の追加 https://www.11ty.dev/docs/config/#template-formats
  // - 指定の拡張子を出力先にコンパイル https://www.11ty.dev/docs/languages/custom/

  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');
  eleventyConfig.addExtension(['11ty.jsx', '11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
    compile: function() {
      return async function(data) {
        try {
          const content = await this.defaultRenderer(data);
          const result = await jsxToString(content);
          return prettier.format(`<!doctype html>\n${result}`, { parser: 'html' });
        } catch (error) {
          console.error('Error during template compilation:', error);
          return '<!doctype html>\n<!-- Error during template compilation -->';
        }
      };
    },
  });

  // # SCSS, CSS
  // - https://11ty.rocks/posts/process-css-with-lightningcss/

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      // Skip files like _fileName.scss
      const parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) return;

      // Run file content through Sass
      const result = sass.compileString(inputContent, {
        loadPaths: [parsed.dir || "."],
        sourceMap: false,
      });

      // Allow included files from @use or @import to
      // trigger rebuilds when using --incremental
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

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
    }
  };
}
