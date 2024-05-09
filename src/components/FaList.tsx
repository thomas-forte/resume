import { Children, PropsWithChildren, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface FaListProps extends PropsWithChildren {
  icon: IconDefinition;
  listClass?: string;
  itemClass?: string;
}

export const FaList = (props: FaListProps) => (
  <ul className={"fa-ul " + props.listClass}>
    {buildItems(props.children, props.icon, props.itemClass)}
  </ul>
);

const buildItems = (
  children: ReactNode,
  icon: IconDefinition,
  itemClass?: string
) =>
  Children.map(children, (element) => (
    <li>
      <FontAwesomeIcon icon={icon} className={"fa-li " + itemClass} />
      {element}
    </li>
  ));
