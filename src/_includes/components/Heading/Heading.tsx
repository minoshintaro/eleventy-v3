import React from 'react';

export type HeadingProps = {
  // tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  lv: '1' | '2' | '3' | '4' | '5' | '6';
  text: string;
  className?: string;
  id?: string;
  children?: React.ReactNode;
};

export function Heading({ lv, text, className, id, children }: HeadingProps): React.ReactElement {
  const Tag = `h${lv}` as keyof JSX.IntrinsicElements;

  return (
    <div className="c-heading">
      <Tag className={className} id={id}>
        {text}
      </Tag>
      {children}
    </div>
  );
}
