import { Base } from "../layouts/Base.11ty";
import { Heading } from "../components/Heading";

export const render = (): JSX.Element => (
  <Base title="Test">
    <Heading name="Hello, World!" />
    <p>:-)</p>
  </Base>
);
