import {
  faAngular,
  faAws,
  faDocker,
  faJava,
  faLinux,
  faPython,
  faRaspberryPi,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { Config } from "./conf.d";

export const config: Config = {
  coverPage: {
    firstName: "Thomas",
    lastName: "Forte",
    resumeUrl: "forte_resume_april_2024.pdf",
    location: "Cleveland, OH",
    phoneNumber: "(216) 310-7521",
    email: "resume@mund.us",
    blurb:
      "I'm a Cleveland based software engineer, with experience using agile frameworks to solve enterprise problems.",
    socialIcons: {
      gitHubUrl: "https://github.com/thomas-forte",
      linkedInUrl: "https://www.linkedin.com/in/thomas-forte",
    },
  },
  photoUrl: "images/profile.jpg",
  showAboutLink: false,
  experiences: [
    {
      experience: {
        position: "Full Stack Software Engineer and IT Manager",
        employer: "McSteen Land Surveyors",
        workDates: "November 2018 - Today",
      },
      details: (
        <ul>
          <li>
            Migrated over 5 million records from the legacy system into the new
            system for a seamless transition
          </li>
          <li>
            Orchestrated an ordering and workflow processing platform from the
            ground up
          </li>
          <ul>
            <li>
              Created a Pdf generation system providing over 5,000 reports and
              statements to clients each month
            </li>
            <li>
              Manages over 7,000 employee tasks per month including processing
              nearly 10k photos and 12k other workflow related documents
            </li>
            <li>
              Automates several previously manual tasks such as pricing,
              quoting, and scheduling tasks
            </li>
            <li>
              Utilizes a stateless restful API for interfacing with web, iOS,
              and CAD applications
            </li>
          </ul>
          <li>
            Reduced legacy application monthly operating costs by over 1,500
          </li>
          <li>
            Developed a Flutter iOS application and distributed to field crews
            to improve day to day productivity
          </li>
          <li>
            Completed and released an Inspection module to add a new service
            line to the legacy system
          </li>
          <li>
            Documented policies and procedures for the IT department to
            standardize all office equipment
          </li>
        </ul>
      ),
    },
    {
      experience: {
        position: "Lead Senior Application Developer",
        employer: "Nationwide Insurance",
        workDates: "July 2018 - November 2018",
      },
      details: (
        <ul>
          <li>Team lead for all customer facing billing applications</li>
          <li>Conducted the Angular rewrite of the legacy Java application</li>
          <li>
            Consulted with the billing systems team to plan for new API services
            and to prioritize co-development
          </li>
        </ul>
      ),
    },
    {
      experience: {
        position: "Senior Application Developer",
        employer: "Nationwide Insurance",
        workDates: "June 2017 - July 2018",
      },
      details: (
        <ul>
          <li>Appointed as SME for dev-ops pipelines and CI processes</li>
          <ul>
            <li>
              Built and maintained shared core containers for the entire company
            </li>
            <li>
              Created documentation and worked with teams to automate their
              build processes
            </li>
            <li>Refined leading to reclaiming more than 8,000 hours</li>
          </ul>
          <li>
            Project lead for creating a lightweight authorization system for
            accepting guest/user-less payments
          </li>
          <ul>
            <li>Processed nearly 50k logins per month</li>
            <li>Accepted 26k payments, equating to 7.1 million dollars</li>
          </ul>
        </ul>
      ),
    },
    {
      experience: {
        position: "Application Developer",
        employer: "Nationwide Insurance",
        workDates: "May 2015 - June 2017",
      },
      details: (
        <ul>
          <li>Contributed to 6 customer facing applications</li>
          <li>
            Simplified onboarding and training materials to get new developers
            up and running on their first day
          </li>
          <li>Chaired as Dev-ops Champion</li>
          <ul>
            <li>Converted all repositories from SVN to GitHub with history</li>
            <li>Containerized my team’s build processes</li>
            <li>
              Automated build/test/deploy notifications utilizing chatbots
            </li>
          </ul>
          <li>
            Project lead for the partial payment project that brought in 5k
            additional payments per month
          </li>
        </ul>
      ),
    },
    {
      experience: {
        position: "Student IT Support Specialist",
        employer: "The Ohio State University",
        workDates: "December 2012 – May 2015",
      },
      details: (
        <ul>
          <li>
            Administered technology services in over 150 classrooms via routine
            maintenance and in-person support
          </li>
        </ul>
      ),
    },
    {
      experience: {
        position: "Webmaster",
        employer: "The Ohio State University",
        workDates: "January 2015 – May 2015",
      },
      details: (
        <ul>
          <li>Created a custom Wordpress theme and plugin</li>
        </ul>
      ),
    },
  ],
  education: [
    {
      school: "The Ohio State University",
      degree: "Bachelor of Science",
      major: "Computer Science & Engineering",
      schoolDates: "March 2012 - May 2015",
    },
  ],
  skills: [
    <>S.O.L.I.D. Principles</>,
    <>Problem Solving</>,
    <>Devops</>,
    <>Networking</>,
    <>Document Generation</>,
  ],
  toolKits: [
    { icon: faPython, description: "Python" },
    { icon: faDocker, description: "Docker" },
    { icon: faLinux, description: "Linux" },
    { icon: faAngular, description: "Angular" },
    { icon: faReact, description: "React" },
    { icon: faJava, description: "Java" },
    { icon: faAws, description: "AWS" },
    { icon: faRaspberryPi, description: "Raspberry Pi" },
  ],
  interests: [
    <>
      Apart from being a developer, I enjoy traveling and trying new things.
      Weather permitting I enjoy a quick hike or bike trail.
    </>,
    <>
      When I have free time, I enjoy tinkering especially with electronics or
      cars.
    </>,
  ],
  awardsAndCertifications: [
    <>Certified Scrum Master</>,
    <>
      2<sup>nd</sup> Place - The Ohio State University - Hackathon Competition
      2014
    </>,
  ],
};
