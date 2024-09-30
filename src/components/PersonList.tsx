import { NameProps, PersonProps } from "../types/Person.types";

type personListProps = { names: NameProps[] };
export default function PersonList(props: personListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1 key={name.first}>
            {name.first} {name.last}
          </h1>
        );
      })}
    </div>
  );
}
