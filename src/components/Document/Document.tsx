import { FC } from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import {
  DesiredPositionType,
  EducationType,
  ExperienceType,
  MainInfoType,
} from "../../common/types";
import { MainInfo } from "./Components/MainInfo";
import { EducationsBlock } from "./Components/EducationsBlock";
import { AdditionalInfoBlock } from "./Components/AdditionalInfoBlock";
import { DesiredPositionBlock } from "./Components/DesiredPositionBlock";

// Create styles
const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#ffffff",
  },
});

const skillsTest = [
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

const experiences: ExperienceType[] = [
  {
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

const infoBlockOne = {
  blockTitle: "Education",
  subTitle: `Bachelor's degree`,
  leftText: "2021",
  content: {
    title: "National Polytechnic University of Armenia",
    description: "Computer Science, Software Architect",
  },
};

const infoBlockTwo = {
  blockTitle: "Additional information",
  leftText: "About me",
  content: {
    description:
      "I am an enterprising and purposeful frontend developer with a strong technical base and team interaction skills. I am constantly striving for self-development, open to new technologies and approaches. Attention to detail, cleanliness and structure of the code are important to me, as well as high-quality execution of tasks on time. I easily adapt to changes and also maintain healthy communication in the team.",
  },
};

type DocumentProps = {
  mainInfo: MainInfoType;
  educations?: EducationType[];
  additionalInfo?: string;
  desiredPositionInfo: DesiredPositionType;
  skills: string[];
  languages: string[];
};

// Create Document Component
export const MyDocument: FC<DocumentProps> = ({
  mainInfo,
  educations,
  additionalInfo = "",
  desiredPositionInfo,
  skills,
  languages,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <MainInfo
          surName={mainInfo.lastName}
          name={mainInfo.firstName}
          birthDate={mainInfo.birthDate ?? ""}
          city={mainInfo.city ?? ""}
          phone={mainInfo.phoneNumber}
          location={mainInfo.country ?? ""}
          email={mainInfo.email}
          country={mainInfo.country ?? ""}
          businessDetails={mainInfo.businessDetails ?? ""}
        />

        <DesiredPositionBlock
          desiredPosition={desiredPositionInfo.desiredPosition}
          busyness={desiredPositionInfo.busyness}
          specializations={desiredPositionInfo.specializations}
          workSchedule={desiredPositionInfo.workSchedule}
        />

        <Experience experiences={experiences} experienceTime="4 years" />

        <EducationsBlock educations={educations || []} />

        <Skills
          title="Skills"
          languages={languages}
          skills={skills}
        />

        <AdditionalInfoBlock additionalInfo={additionalInfo} />
      </Page>
    </Document>
  );
};
