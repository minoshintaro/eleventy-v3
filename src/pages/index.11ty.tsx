import { render as layout } from "../layouts/base.11ty";
import { Heading } from "../components/Heading";

export const render = (): JSX.Element => {
  const title = "Lorem ipsum";
  const content = (
    <div>
      <Heading name="Hello, World!" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit :-)</p>
    </div>
  );
  return layout({ title, content });
};
