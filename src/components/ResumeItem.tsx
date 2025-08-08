import type { PropsWithChildren } from "react";

export interface ResumeItemProps extends PropsWithChildren {
  position: string;
  employer: string;
  workDates: string;
}

export const ResumeItem = (props: ResumeItemProps) => (
  <div className="resume-item d-flex flex-column mb-5">
    <div className="resume-content d-flex justify-content-between flex-column flex-md-row">
      <div>
        <h3 className="mb-0">{props.position}</h3>
        <div className="subheading mb-0 mb-md-3">{props.employer}</div>
      </div>
      <span className="resume-date text-primary text-md-end mb-3 mb-md-0">
        {props.workDates}
      </span>
    </div>
    {props.children}
  </div>
);
