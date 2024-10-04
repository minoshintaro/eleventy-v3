import { jsxToString } from 'jsx-async-runtime';
import prettier from 'prettier';

export default function (eleventyConfig: any) {
  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');
  eleventyConfig.addExtension(['11ty.jsx', '11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
  });

  eleventyConfig.addTransform('tsx', async (content: JSX.Element) => {
    const result = await jsxToString(content);
    const html = `<!doctype html>\n${result}`
    return prettier.format(html, { parser: 'html' });
});

  return {
    dir: {
      input: 'src/pages',
      layouts: '../layouts',
      output: 'dist',
    },
  };
}
