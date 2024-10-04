interface Prop {
  title: string;
  content: string;
}

export const render = ({ title, content }: Prop): JSX.Element => (
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      {content}
    </body>
  </html>
);
