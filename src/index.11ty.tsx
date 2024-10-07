import Heading from "./_includes/components/Heading";
import { Base } from "./_includes/layouts/Base.11ty";

const title = 'Test page';

export const render = (): JSX.Element => (
  <Base title={title}>
    <Heading as="h2" text="Hello, World!" />
    <p>Lorem ipsum :-)</p>
    <a href="blog/index.html">Blog</a>
    <p>HMRができない？</p>
  </Base>
);
