import React from "react";

export type BaseProps = {
  title: string;
  children: React.ReactNode;
};

export function Base({ title, children }: BaseProps): React.ReactElement {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="stylesheet" href="/styles/index.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

export function render(data: any): React.ReactElement {
  return (
    <Base title={data?.title}>
      <div dangerouslySetInnerHTML={{ __html: data?.content }} />
    </Base>
  );
}
