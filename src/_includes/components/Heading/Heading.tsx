import React from 'react';

type HeadingProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  text: string;
  subText?: string;
  className?: string;
  id?: string;
};

const Heading: React.FC<HeadingProps> = ({ tag: Tag = 'p', text, subText, className, id }) => {
  return (
    <div className="c-heading">
      <Tag className={className} id={id}>
        {text}
      </Tag>
      {subText && <p>{subText}</p>}
    </div>
  );
};

export { Heading, HeadingProps };
