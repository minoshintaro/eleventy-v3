interface Props {
  title: string;
  content?: string;
  children?: JSX.Children;
}

function Base({ title, content, children }: Props): JSX.Element {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/assets/styles/index.css" />
      </head>
      <body>
        {content ? content : children}
      </body>
    </html>
  );
}

const render = Base;

export { Base, render };
