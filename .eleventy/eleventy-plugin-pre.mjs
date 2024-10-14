import browserslist from 'browserslist';
import { browserslistToTargets, transform, bundle } from 'lightningcss';
import fs from 'fs';
import path from 'path';

export default function pluginCss(eleventyConfig) {
  const targets = browserslistToTargets(browserslist());

  eleventyConfig.addPreprocessor('tsx', async (content, inputPath) => {
    if (inputPath.endsWith('.tsx')) {
      const cssPath = path.resolve('./src/styles.module.css'); // CSS Modulesファイルへのパス

      // CSSファイルを読み込み、LightningCSSで変換
      const cssContent = fs.readFileSync(cssPath, 'utf-8');
      const { code, exports } = transform({
        filename: cssPath,
        code: Buffer.from(cssContent),
        cssModules: true,  // CSS Modules有効化
      });

      // 必要であればCSSをビルドディレクトリに出力
      fs.writeFileSync(path.resolve('./dist/styles.module.css'), code);

      // TSX内でCSS Modulesのクラス名を使用できるように変換
      const modifiedContent = content.replace(
        /import styles from '.*\.module\.css';/g,
        `const styles = ${JSON.stringify(exports)};`
      );

      return modifiedContent;
  }

  return content;
});
};





