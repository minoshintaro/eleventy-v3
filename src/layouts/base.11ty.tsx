interface Prop {
  title: string;
  children?: JSX.Children;
  content?: string;
}

export const Base = ({ title, children, content }: Prop): JSX.Element => (
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      {children || content}
    </body>
  </html>
);

export const render = Base;
