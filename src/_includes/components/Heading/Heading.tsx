import { createElement } from 'jsx-async-runtime';

type HeadingProps = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  text: string;
  subText?: string;
  className?: string;
  id?: string;
};

function Heading({ tag = 'p', text, subText, className, id }: HeadingProps): JSX.Element {
  const HeadingTag = createElement(tag, { className, id }, text);

  return (
    <div className="c-heading">
      {HeadingTag}
      {subText && <p>{subText}</p>}
    </div>
  );
}

export { Heading, HeadingProps };
