interface Prop {
  title: string;
  content: string;
}

const Layout = ({ title, content }: Prop): JSX.Element => {
  return (
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
}

export const render = Layout;
