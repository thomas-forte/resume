import type { PropsWithChildren } from "react";

export interface SectionHeaderProps {
  header: string;
}

export const SectionHeader = (props: SectionHeaderProps) => (
  <h2 className="mb-5">{props.header}</h2>
);

export interface SectionProps extends PropsWithChildren {
  id: string;
  header?: string;
}

export const Section = (props: SectionProps) => (
  <>
    <section
      className="resume-section p-3 p-lg-5 d-flex d-column"
      id={props.id}
    >
      <div className="my-auto w-100">
        {buildSectionHeader(props.header)}
        {props.children}
      </div>
    </section>

    <hr className="m-0" />
  </>
);

const buildSectionHeader = (header?: string) => {
  if (header) {
    return <SectionHeader header={header} />;
  } else {
    return <></>;
  }
};
