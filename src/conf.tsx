import {
  faAngular,
  faAws,
  faDocker,
  faJava,
  faLinux,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import type { Config } from "./conf.d";

export const config: Config = {
  coverPage: {
    firstName: "Thomas",
    lastName: "Forte",
    resumeUrl: "forte_resume_feb_2026.pdf",
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
      position: "Principal Full Stack Software Engineer / IT Manager",
      employer: "McSteen Land Surveyors",
      workDates: "November 2018 - December 2025",
      details: [
        "Designed, developed, and supported a service-oriented platform used across web, mobile, and CAD-integrated applications",
        "Led migration of 5M+ production records from a legacy system into a modernized architecture with zero business interruption",
        "Built and maintained stateless RESTful APIs supporting Angular web applications, iOS clients, and third-party integrations",
        "Developed automated data processing pipelines handling 10k+ photos and 12k+ workflow documents monthly",
        "Implemented automated pricing, quoting, and scheduling workflows, significantly reducing manual operational effort",
        "Created a PDF generation and reporting system delivering 5,000+ monthly reports and customer statements",
        "Reduced legacy system operating costs by over $1,500 per month through optimization and automation",
        "Developed and deployed a Flutter-based iOS application used by field crews to improve daily productivity",
        "Served as primary technical owner for production systems, documentation, and internal IT service processes",
      ],
    },
    {
      position: "Lead Senior Application Developer",
      employer: "Nationwide Insurance",
      workDates: "July 2018 - November 2018",
      details: [
        "Led the Angular rewrite of a mission-critical legacy Java billing application supporting customer-facing workflows",
        "Acted as technical lead for frontend architecture, API integration, and performance improvements",
        "Collaborated with backend and billing platform teams to design and prioritize new API services",
        "Represented the application portfolio as a subject matter expert across multiple stakeholder teams",
      ],
    },
    {
      position: "Senior Application Developer",
      employer: "Nationwide Insurance",
      workDates: "June 2017 - July 2018",
      details: [
        "Served as SME for CI/CD pipelines and build automation supporting multiple enterprise applications",
        "Built and maintained shared containerized build infrastructure used company-wide",
        "Improved deployment reliability and developer efficiency, reclaiming an estimated 8,000 engineering hours per month",
        "Led development of a lightweight authorization system enabling guest and user-less payments",
        "Supported systems processing 50k+ monthly logins and 26k payments totaling over $7.1M in monthly revenue",
      ],
    },
    {
      position: "Application Developer",
      employer: "Nationwide Insurance",
      workDates: "May 2015 - June 2017",
      details: [
        "Developed and maintained several customer-facing enterprise applications",
        "Championed DevOps practices including repository standardization, build automation, and deployment notifications",
        "Migrated all team repositories from SVN to GitHub while preserving full history",
        "Led partial-payment initiative generating 5k+ additional customer payments per month",
        "Simplified onboarding and training materials, enabling new developers to contribute on day one",
      ],
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
    <>
      <b>Backend:</b> &nbsp; RESTful APIs, Python, Django, Java, Postgres,
      Spring, SQL Server
    </>,
    <>
      <b>Frontend:</b> &nbsp; Angular, React, TypeScript, JavaScript, HTML/CSS
    </>,
    <>
      <b>Cloud & Infrastructure:</b> &nbsp; AWS (S3, Fargate, EC2), Terraform,
      Linux, DNS, networking
    </>,
    <>
      <b>DevOps:</b> &nbsp; GitHub Actions, CI/CD pipelines, containerization,
      build automation
    </>,
  ],
  toolKits: [
    { icon: faPython, description: "Python" },
    { icon: faDocker, description: "Docker" },
    { icon: faLinux, description: "Linux" },
    { icon: faAngular, description: "Angular" },
    { icon: faReact, description: "React" },
    { icon: faJava, description: "Java" },
    { icon: faAws, description: "AWS" },
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
