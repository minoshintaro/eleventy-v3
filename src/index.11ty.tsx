import { Base } from "./_includes/layouts/Base.11ty";
import { Heading } from "./_includes/components/Heading";

const title = 'Test page';

export const render = (): JSX.Element => (
  <Base title={title}>
    <Heading as="h1" text="Hello, New World!" />
    <Heading as="h2" text="This is it" />
    <p>Lorem :-)</p>
    <a href="blog/index.html">Blog →</a>
  </Base>
);
