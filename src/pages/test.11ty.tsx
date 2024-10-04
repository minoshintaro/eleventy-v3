import { Base } from "../layouts/Base.11ty";
import { Heading } from "../components/Heading";

export const render = (): JSX.Element => Base({
  title: 'Lorem ipsum',
  children: (
    <div>
      <Heading name="Hello, World!" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit :-)</p>
    </div>
  )
});
