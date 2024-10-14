import React from 'react';
import { Base } from "./_includes/layouts/Base.11ty";
import { Heading } from "./_includes/components/Heading/Heading";
import { Button } from "./_includes/components/Button";

const title = 'Lorem';

export function render(): React.ReactElement {
  return (
    <Base title={title}>
      <Heading lv="1" text="Hello, world!">
        <span role="img" aria-label="wave">👋👋👋</span>
      </Heading>
      <p>Lorem ipsum :-)</p>
      <Button tag="a" text="Blogs" icon="suffix" size="medium" />
    </Base>
  );
}
