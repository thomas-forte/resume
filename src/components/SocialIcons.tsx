import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export interface SocialIconsProps {
  gitHubUrl?: string;
  linkedInUrl?: string;
}

export const SocialIcons = (props: SocialIconsProps) => (
  <div className="social-icons">
    {buildLinkedInIcon(props.linkedInUrl)}
    {buildGitHubIcon(props.gitHubUrl)}
  </div>
);

const buildGitHubIcon = (url?: string) => {
  if (url) {
    return (
      <a href={url} target="blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    );
  } else {
    return <></>;
  }
};

const buildLinkedInIcon = (url?: string) => {
  if (url) {
    return (
      <a href={url}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    );
  } else {
    return <></>;
  }
};
