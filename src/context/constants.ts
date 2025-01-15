import {
  DesiredPositionType,
  EducationType,
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
