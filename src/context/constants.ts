import {
  DesiredPositionType,
  EducationType,
  ExperienceType,
  MainInfoType,
} from "../common/types";
import { generateId } from "../common/utils";

export const INITIAL_MAIN_INFO: MainInfoType = {
  lastName: "Kochinyan",
  firstName: "Tigran",
  birthDate: "January 24, 1999",
  city: "Yerevan",
  phoneNumber: "+374 (93) 550242",
  email: "tigrankochinyan24@gmail.com",
  country: "Armenia",
  businessDetails: "full-time, part-time, project work",
};

export const INITIAL_LANGUAGES_INFO: string[] = [
  "Armenian-Native",
  "English-B1",
  "Russian-C2",
];

export const INITIAL_EDUCATION_INFO: EducationType[] = [
  {
    id: generateId(),
    date: "2021",
    major: "Computer Science, Software Architect",
    title: "Bachelor's degree",
    university: "National Polytechnic University of Armenia",
  },
];

export const INITIAL_DESIRED_POSITION_INFO: DesiredPositionType = {
  desiredPosition: "Frontend developer",
  busyness: "Ready to move, ready for business trips",
  specializations:
    "Frontend Developer, Software engineer, Full-stack Developer",
  workSchedule: "full-time, flexible schedule, remote work",
};

export const INITIAL_SKILLS = [
  "HTML5",
  "CSS3",
  "Redux",
  "Node.js",
  "Sass",
  "ES6+",
  "SCSS",
  "GraphQL",
  "storybook",
  "JEST",
  "Apollo",
  "Jira",
  "Git",
  "TypeScript",
  "REST",
  "Less",
  "Webpack",
  "Bootstrap",
  "MobX",
  "Figma",
  "npm",
  "FSD",
  "API",
  "Linux",
  "Frontend",
  "BEM",
  "jQuery",
];

export const INITIAL_USER_ADDITIONAL_INFO =
  "I am an enterprising and purposeful frontend developer with a strong technical base and team interaction skills. I am constantly striving for self-development, open to new technologies and approaches. Attention to detail, cleanliness and structure of the code are important to me, as well as high-quality execution of tasks on time. I easily adapt to changes and also maintain healthy communication in the team.";

export const INITIAL_EXPERIENCES: ExperienceType[] = [
  {
    id: generateId(),
    position: "React Developer",
    company: "Savvy Hill",
    date: "July 2022 — present",
    period: "2 years 4 months",
    cases: [
      "Developed reusable UI components using Storybook, ensuring the modularity and scalability of projects.",
      "Actively worked with micro-interfaces and was engaged in the deployment of applications using Docker.",
      "Developed own user interface components and integrated existing libraries to meet the needs of the project.",
      "Worked closely with backend developers and designers to implement new features fix problems and improve the user experience.",
      "Conducted debugging and support of existing code, with an emphasis on improving and optimizing it.",
      "Was deeply immersed in business logic to develop features that meet both technical and business goals",
      "Actively participated in teamwork, mentored and supported junior developers",
      "Participated in the release processes, ensuring timely updates and bug fixes.",
      "Was involved in Scrum procedures: sprint planning, stand-ups and retrospectives.",
      "Had experience working with CI/CD pipelines, including Gitlab CI, Docker, to automate and optimize workflows.",
      "Wrote unit tests for the new code to ensure high quality and stability.",
      "Regularly conducted code reviews to maintain standards and best practices in the team.",
    ],
  },
  {
    id: generateId(),
    position: "React Developer",
    company: "Questline LLC",
    date: "November 2020 — July 2022",
    period: "1 year 9 months",
    cases: [
      "Developed cross-browser, adaptive web applications, ensuring their compatibility on all devices.",
      "Was actively involved in the development of new features and bug fixes.",
      "Wrote documentation for code, functionality and processes for internal and external use",
      "Interacted with backend developers, QA and product managers to provide a high level of UX.",
      "Regularly conducted code reviews.",
    ],
  },
];