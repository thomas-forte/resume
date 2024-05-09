export interface EducationItemProps {
  school: string;
  degree: string;
  major: string;
  schoolDates: string;
}

export const EducationItem = (props: EducationItemProps) => (
  <div className="resume-item d-flex flex-column mb-5">
    <div className="resume-content d-flex justify-content-between flex-column flex-md-row">
      <div>
        <h3 className="mb-0">{props.school}</h3>
        <div className="subheading mb-0 mb-md-3">{props.degree}</div>
      </div>
      <span className="resume-date text-primary text-md-end mb-3 mb-md-0">
        {props.schoolDates}
      </span>
    </div>
    {props.major}
  </div>
);
