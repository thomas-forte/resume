import type { ReactNode } from "react";
import { faCheck, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

import { CoverPage } from "./components/CoverPage";
import {
  EducationItem,
  type EducationItemProps,
} from "./components/EducationItem";
import { FaList } from "./components/FaList";
import { Navigation } from "./components/Navigation";
import { PList } from "./components/PList";
import { ResumeItem } from "./components/ResumeItem";
import { Section } from "./components/Section";
import { ToolKit, type ToolKitItemProps } from "./components/ToolKit";

import type { Config, ExperienceConfig } from "./conf.d";

export interface AppProps {
  config: Config;
}

export const App = ({ config }: AppProps) => {
  return (
    <>
      <Navigation config={config} />

      <Container fluid className="p-0">
        <Section id="about">
          <CoverPage coverPageConfig={config.coverPage} />
        </Section>
        {buildExperienceSection(config.experiences)}
        {buildEducationSection(config.education)}
        {buildSkillsSection(config.skills, config.toolKits)}
        {buildInterestsSection(config.interests)}
        {buildAwardsSection(config.awardsAndCertifications)}
      </Container>
    </>
  );
};

const buildExperienceSection = (experienceConfigs?: ExperienceConfig[]) => {
  if (experienceConfigs?.length) {
    return (
      <Section id="experience" header="Experience">
        {experienceConfigs.map((e, i) => (
          <ResumeItem key={i} {...e.experience}>
            {e.details}
          </ResumeItem>
        ))}
      </Section>
    );
  } else {
    return <></>;
  }
};

const buildEducationSection = (educations?: EducationItemProps[]) => {
  if (educations?.length) {
    return (
      <Section id="education" header="Education">
        {educations.map((e, i) => (
          <EducationItem key={i} {...e} />
        ))}
      </Section>
    );
  } else {
    return <></>;
  }
};

const buildSkillsSection = (
  skills?: ReactNode[],
  toolKits?: ToolKitItemProps[]
) => {
  if (skills?.length ?? toolKits?.length) {
    return (
      <Section id="skills" header="Skills">
        {buildSkillList(skills)}
        {buildToolKits(toolKits)}
      </Section>
    );
  } else {
    return <></>;
  }
};

const buildSkillList = (skills?: ReactNode[]) => {
  if (skills?.length) {
    return (
      <FaList icon={faCheck} listClass="mb-5">
        {skills}
      </FaList>
    );
  } else {
    return <></>;
  }
};

const buildToolKits = (toolKits?: ToolKitItemProps[]) => {
  if (toolKits?.length) {
    return <ToolKit toolKits={toolKits} />;
  } else {
    return <></>;
  }
};

const buildInterestsSection = (interests?: ReactNode[]) => {
  if (interests?.length) {
    return (
      <Section id="interests" header="Interests">
        <PList>{interests}</PList>
      </Section>
    );
  } else {
    return <></>;
  }
};

const buildAwardsSection = (awardsAndCertifications?: ReactNode[]) => {
  if (awardsAndCertifications?.length) {
    return (
      <Section id="awards" header="Awards & Certifications">
        <FaList icon={faTrophy} listClass="mb-0" itemClass="text-warning">
          {awardsAndCertifications}
        </FaList>
      </Section>
    );
  } else {
    return <></>;
  }
};
