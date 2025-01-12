import { FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  block: {
    margin: 20,
  },
  blockTitle: {
    color: "#999999",
    borderBottom: "0.5px solid #999999",
    marginBottom: 8,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  leftSide: {
    flexGrow: 1,
    width: "25%",
  },
  rightSide: {
    width: "70%",
  },
  rightSideSkills: {
    width: "70%",
    flexGrow: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    marginHorizontal: 2,
    display: "flex",
  },
  description: {
    color: "#999999",
  },
  contentText: {
    fontSize: 14,
  },
  skill: {
    margin: 2,
    padding: 4,
    borderRadius: 2,
    fontSize: 14,
    backgroundColor: "#999999",
  },
});

type LanguageSkill = {
  language: string;
  text: string;
};

type SkillsProps = {
  title?: string;
  languages: LanguageSkill[];
  skills: string[];
};

// Create Document Component
export const Skills: FC<SkillsProps> = ({ title, languages, skills }) => (
  <View style={styles.block}>
    <Text style={styles.blockTitle}>{title}</Text>

    <View style={styles.content}>
      <View style={styles.leftSide}>
        <Text style={styles.description}>Languages</Text>
      </View>
      <View style={styles.rightSide}>
        {languages.map((item) => (
          <Text key={item.language} style={styles.contentText}>
            {item.language} {item.text}
          </Text>
        ))}
      </View>
    </View>

    <View style={styles.content}>
      <View style={styles.leftSide}>
        <Text style={styles.description}>Skills</Text>
      </View>
      <View wrap style={styles.rightSideSkills}>
        {skills.map((skill) => (
          <Text key={skill} style={styles.skill}>
            {skill}
          </Text>
        ))}
      </View>
    </View>
  </View>
);
