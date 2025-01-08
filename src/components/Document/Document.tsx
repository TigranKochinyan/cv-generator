import { FC } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { MainInfo } from "../../context/UserInfoContext";
import { Skills } from "./Components/Skills";
import { BaseInfoBlock } from "./Components/BaseInfoBlock";

// Create styles
const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#ffffff",
  },
  name: {
    fontSize: 26,
  },
  age: {
    fontSize: 14,
  },
  contacts: {
    marginTop: 15,
  },
  contactText: {
    fontSize: 14,
  },
  heading: {
    margin: 20,
  },
  blockTitle: {
    fontSize: 16,
    borderBottom: "1px solid #999999",
  },
  box: {
    marginTop: 5,
    marginHorizontal: 20,
    flexWrap: "wrap",
  },
  positionBox: {
    marginHorizontal: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    color: "#999999",
    borderBottom: "1px solid #999999",
    fontSize: 16,
    // marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold"
  },
  specInfoText: {
    fontSize: 14
  },
  ml: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 5,
  },
  leftSide: {
    flexGrow: 1,
    width: "25%",
  },
  leftText: {
    fontSize: 14,
  },
  rightSide: {
    width: "70%",
  },
  rightTitle: {
    fontSize: 14,
    marginLeft: 4
  },
  section2: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#909090",
  },
  basicText: {
    fontWeight: "light",
    fontSize: 12,
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

type DocumentProps = {
  title?: string;
  mainInfo?: MainInfo;
};

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

// Create Document Component
export const MyDocument: FC<DocumentProps> = ({ title, mainInfo }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.heading}>
        <Text style={styles.name}>Kochinyan Tigran</Text>
        <Text style={styles.age}>Male, 25 age, born on January 24, 1999</Text>

        <View style={styles.contacts}>
          <Text style={styles.contactText}>+374 (93) 550242</Text>
          <Text style={styles.contactText}>tigrankochinyan24@gmail.com</Text>
        </View>
        

        <View style={styles.contacts}>
          <Text style={styles.contactText}>Location: Armenia, Yerevan</Text>
          <Text style={styles.contactText}>Citizenship: Armenia</Text>
          <Text style={styles.contactText}>Ready to move, ready for business trips</Text>
        </View>
      </View>

      <View style={styles.positionBox}>
        <Text style={styles.title}>Desired position</Text>
        <View style={styles.ml}>
          <Text style={styles.subTitle}>Frontend developer</Text>
          <Text style={styles.specInfoText}>Specializations: Programmer, Developer, Software engineer</Text>
          <Text style={styles.specInfoText} wrap>Busyness: full-time, part-time, project work</Text>
          <Text style={styles.specInfoText} wrap>
            Work schedule: full-time, flexible schedule, remote work
          </Text>
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.blockTitle}>Work experience — 4 years</Text>
        <View style={styles.flex}>
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>July 2022 — present</Text>
            <Text style={styles.leftText}>2 years 4 months</Text>
          </View>
          <View style={styles.rightSide}>
            <Text style={styles.rightTitle}>Savvy Hill</Text>
            <Text style={styles.rightTitle}>React developer</Text>

            <View style={{ flexDirection: "column", width: 400 }}>
              <View style={{ flexDirection: "row", marginBottom: 4, marginTop: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Developed reusable UI components using Storybook, ensuring the
                  modularity and scalability of projects.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Actively worked with micro-interfaces and was engaged in the
                  deployment of applications using Docker.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Developed own user interface components and integrated
                  existing libraries to meet the needs of the project.
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Worked closely with backend developers and designers to
                  implement new features fix problems and improve the user
                  experience.
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Conducted debugging and support of existing code, with an
                  emphasis on improving and optimizing it.
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Was deeply immersed in business logic to develop features that
                  meet both technical and business goals
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Actively participated in teamwork, mentored and supported
                  junior developers
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Participated in the release processes, ensuring timely updates
                  and bug fixes.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Was involved in Scrum procedures: sprint planning, stand-ups
                  and retrospectives.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Had experience working with CI/CD pipelines, including Gitlab
                  CI, Docker, to automate and optimize workflows.
                </Text>
              </View>

              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Wrote unit tests for the new code to ensure high quality and
                  stability.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Regularly conducted code reviews to maintain standards and
                  best practices in the team.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.flex}>
          <View style={styles.leftSide}>
            <Text style={styles.leftText}>November 2020 — July 2022</Text>
            <Text style={styles.leftText}>1 year 9 months</Text>
          </View>
          <View style={styles.rightSide}>

            <Text style={styles.rightTitle}>Questline LLC</Text>
            <Text style={styles.rightTitle}>React developer</Text>

            <View style={{ flexDirection: "column", width: 400 }}>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Developed cross-browser, adaptive web applications, ensuring
                  their compatibility on all devices.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Was actively involved in the development of new features and
                  bug fixes.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Wrote documentation for code, functionality and processes for
                  internal and external use
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Interacted with backend developers, QA and product managers to
                  provide a high level of UX.
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginBottom: 4 }}>
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>
                  Regularly conducted code reviews.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <BaseInfoBlock {...infoBlockOne} />

      <Skills
        title="Skills"
        languages={[
          { language: "Armenian", text: "— Native" },
          { language: "English", text: "— B1" },
          { language: "Russian", text: "— C2" },
        ]}
        skills={skillsTest}
      />

      <BaseInfoBlock {...infoBlockTwo} />


    </Page>
  </Document>
);
