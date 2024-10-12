import React from "react";

interface BaseProps {
  title: string;
  children: React.ReactNode;
}

function Base({ title, children }: BaseProps): React.ReactElement {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/assets/styles/index.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

interface MarkdownProps {
  title: string;
  layout: string;
  tags: string[];
  content: string;
}

function render(input: MarkdownProps): React.ReactElement {
  const { title, content} = input;
  const markup = { __html: content };

  return (
    <Base title={title}>
      <div dangerouslySetInnerHTML={markup} />
    </Base>
  );
}

export { Base, render };
