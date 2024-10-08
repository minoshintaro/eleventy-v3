import { createElement } from 'jsx-async-runtime';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  subText?: string;
  className?: string;
  id?: string;
};

function Heading({ as, text, subText, className, id }: Props): JSX.Element {
  const HeadingTag = createElement(as, { className, id }, text);

  return (
    <div className="c-heading text-md">
      {HeadingTag}
      {subText && <p>{subText}</p>}
    </div>
  );
}

export { Heading };
