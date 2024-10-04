export type Props = {
  name: string;
  subName?: string;
};

export const Heading = ({ name, subName }: Props): JSX.Element => (
  <div>
    <h1>{name}</h1>
    {subName && <p>{subName}</p>}
  </div>
);
