import { Children, PropsWithChildren, ReactNode } from "react";

export const PList = (props: PropsWithChildren) => buildItems(props.children);

const buildItems = (children: ReactNode) => {
  const childCount = Children.toArray(children).length;
  if (children) {
    return Children.map(children, (element, index) => (
      <p className={index === childCount - 1 ? "mb-0" : undefined}>{element}</p>
    ));
  } else {
    return <p className="mb-0">I&apos;m not that interesting.</p>;
  }
};
