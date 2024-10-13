import React from 'react';
import { Base } from "./_includes/layouts/Base.11ty";
import { Heading } from "./_includes/components/Heading/Heading";

const title = 'Lorem';

export function render(): React.ReactElement {
  return (
    <Base title={title}>
      <Heading tag="h1" text="Hello, world!" />
      <p>Lorem ipsum :-)</p>
      <a href="blog/index.html">Blog →</a>
    </Base>
  );
}
