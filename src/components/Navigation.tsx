import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import type { Config } from "../conf.d";

export interface NavigationProps {
  config: Config;
}

export const Navigation = ({ config }: NavigationProps) => (
  <Navbar
    expand="lg"
    className="navbar-dark px-3"
    id="side-nav"
    fixed="top"
    bg="primary"
  >
    <Navbar.Brand href="#about">
      <span className="d-block d-lg-none">
        {config.coverPage.firstName + " " + config.coverPage.lastName}
      </span>
      <span className="d-none d-lg-block">
        <img
          className="img-fluid img-profile rounded-circle mx-auto mb-2"
          src={config.photoUrl}
          alt={config.coverPage.firstName + " " + config.coverPage.lastName}
        />
      </span>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {buildAboutLink(config.showAboutLink)}
        {buildExperienceLink(config.experiences)}
        {buildEducationLink(config.education)}
        {buildSkillsLink(config.skills, config.toolKits)}
        {buildInterestsLink(config.interests)}
        {buildAwardsLink(config.awardsAndCertifications)}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const buildAboutLink = (showAboutLink = true) => {
  if (showAboutLink) {
    return <Nav.Link href="#about">About</Nav.Link>;
  } else {
    return <></>;
  }
};

const buildExperienceLink = (experienceConfigs?: unknown[]) => {
  if (experienceConfigs?.length) {
    return <Nav.Link href="#experience">Experience</Nav.Link>;
  } else {
    return <></>;
  }
};

const buildEducationLink = (educations?: unknown[]) => {
  if (educations?.length) {
    return <Nav.Link href="#education">Education</Nav.Link>;
  } else {
    return <></>;
  }
};

const buildSkillsLink = (skills?: unknown[], toolKits?: unknown[]) => {
  if (skills?.length ?? toolKits?.length) {
    return <Nav.Link href="#skills">Skills</Nav.Link>;
  } else {
    return <></>;
  }
};

const buildInterestsLink = (interests?: unknown[]) => {
  if (interests?.length) {
    return <Nav.Link href="#interests">Interests</Nav.Link>;
  } else {
    return <></>;
  }
};

const buildAwardsLink = (awardsAndCertifications?: unknown[]) => {
  if (awardsAndCertifications?.length) {
    return <Nav.Link href="#awards">Awards</Nav.Link>;
  } else {
    return <></>;
  }
};
