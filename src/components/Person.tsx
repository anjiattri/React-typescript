import { PersonProps } from "../types/Person.types";

function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}

export default Person;
