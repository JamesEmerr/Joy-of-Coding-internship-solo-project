import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
import { Button, chakra } from "@chakra-ui/react";

function FilterButton(props: {
  isPressed: string | boolean | undefined;
  setFilter: (arg0: any) => void;
  name:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}) {
  return (
    <Button  justifyContent="center" padding="20px"
//      type="button"
      className="btn toggle-btn"
//      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </Button>
  );
}

export default FilterButton;
