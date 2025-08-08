import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import { SocialIcons } from "./SocialIcons";

import type { CoverPageConfig } from "../conf.d";

export interface AboutSectionProps {
  coverPageConfig: CoverPageConfig;
}

export const CoverPage = ({ coverPageConfig }: AboutSectionProps) => (
  <>
    <div className="d-md-flex justify-content-between align-items-start">
      <h1 className="mb-0 d-inline-flex flex-column flex-md-row">
        {coverPageConfig.firstName}
        <span className="text-primary">{coverPageConfig.lastName}</span>
      </h1>
      <a className="btn resume-button" href={coverPageConfig.resumeUrl}>
        <FontAwesomeIcon icon={faFilePdf} className="me-1" />
        Download Resume
      </a>
    </div>
    <div className="subheading mb-5">
      {coverPageConfig.location} · {coverPageConfig.phoneNumber} ·
      <a href={"mailto:" + coverPageConfig.email}> {coverPageConfig.email}</a>
    </div>
    <p className="lead mb-5">{coverPageConfig.blurb}</p>
    <SocialIcons
      gitHubUrl={coverPageConfig.socialIcons.gitHubUrl}
      linkedInUrl={coverPageConfig.socialIcons.linkedInUrl}
    />
  </>
);
