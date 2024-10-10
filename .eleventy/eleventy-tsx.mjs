import prettier from 'prettier';
import { jsxToString } from 'jsx-async-runtime';

export default function (eleventyConfig) {
  // eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');

  eleventyConfig.addExtension(['11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
    compile: function() {
      return async function (data) {
        const jsx = await this.defaultRenderer(data);
        const html = await jsxToString(jsx);
        return prettier.format(`<!doctype html>\n${html}`, { parser: 'html' });
			};
    },
  });
}
