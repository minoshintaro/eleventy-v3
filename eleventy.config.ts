import { jsxToString } from 'jsx-async-runtime';

export default function (eleventyConfig: any) {
  eleventyConfig.addExtension(['11ty.jsx', '11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
  });

  eleventyConfig.addTemplateFormats('11ty.ts,11ty.tsx');

  eleventyConfig.addTransform('tsx', async (content: JSX.Element) => {
    const result = await jsxToString(content);
    return `<!doctype html>\n${result}`;
});

  return {
    dir: {
      input: 'src/pages',
      layouts: '../layouts',
      output: 'dist',
    },
  };
}
