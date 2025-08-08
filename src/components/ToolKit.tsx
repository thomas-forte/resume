import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface ToolKitProps {
  toolKits: ToolKitItemProps[];
}

export const ToolKit = ({ toolKits }: ToolKitProps) => (
  <>
    <div className="subheading mb-3 d-flex align-items-center">
      My Toolbox{" "}
      <small className="ms-1 text-body-tertiary">(not all inclusive)</small>
    </div>
    <ul className="list-inline dev-icons">
      {toolKits.map((tk, index) => (
        <ToolKitItem key={index} {...tk}></ToolKitItem>
      ))}
    </ul>
  </>
);

export interface ToolKitItemProps {
  icon: IconDefinition;
  description: string;
}

export const ToolKitItem = (props: ToolKitItemProps) => (
  <li className="list-inline-item">
    <FontAwesomeIcon icon={props.icon} />
    <p>{props.description}</p>
  </li>
);
