import prettier from 'prettier';
import { renderToStaticMarkup } from "react-dom/server";

export default function (eleventyConfig) {
  eleventyConfig.addExtension(['11ty.ts', '11ty.tsx'], {
    key: '11ty.js',
    compile(inputContent, inputPath) {
      // console.log('test:', inputPath, JSON.stringify(inputContent.render().props.children));
      return async function (data) {
        const reactNode = await this.defaultRenderer(data);
        const html = renderToStaticMarkup(reactNode);
        // return `<!doctype html>\n${html}`;
        return prettier.format(`<!doctype html>\n${html}`, { parser: 'html' });
			};
    },
  });
}
