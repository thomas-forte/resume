import { ReactNode } from "react";

import { EducationItemProps } from "./components/EducationItem";
import { ToolKitItemProps } from "./components/ToolKit";
import { ResumeItemProps } from "./components/ResumeItem";

export interface SocialIconsConfig {
  gitHubUrl?: string;
  linkedInUrl?: string;
}

export interface CoverPageConfig {
  firstName: string;
  lastName: string;
  resumeUrl: string;
  location: string;
  phoneNumber: string;
  email: string;
  blurb: string;
  socialIcons: SocialIconsConfig;
}

export interface ExperienceConfig {
  experience: ResumeItemProps;
  details: ReactNode;
}

export interface Config {
  coverPage: CoverPageConfig;
  photoUrl: string;
  showAboutLink?: boolean;
  experiences?: ExperienceConfig[];
  education?: EducationItemProps[];
  skills?: ReactNode[];
  toolKits?: ToolKitItemProps[];
  interests?: ReactNode[];
  awardsAndCertifications?: ReactNode[];
}
