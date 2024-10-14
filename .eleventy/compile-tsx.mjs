import prettier from 'prettier';
import { renderToStaticMarkup } from "react-dom/server";
import 'tsx/esm';

export function compileTsx(eleventyConfig) {
  eleventyConfig.addExtension(['11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
    compile(inputContent, inputPath) {
      console.log('=> tsx:', inputPath, inputContent, inputContent.render().props.children);
      return async function (data) {
        const reactNode = await this.defaultRenderer(data);
        const html = renderToStaticMarkup(reactNode);

        // console.log('=> file:', inputPath, inputContent.render(), '=>', html);

        return prettier.format(`<!doctype html>\n${html}`, { parser: 'html' });
			};
    },
  });
}
