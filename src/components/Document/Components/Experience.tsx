import { FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { ExperienceType } from "../../../common/types";

// Create styles
const styles = StyleSheet.create({
  blockTitle: {
    fontSize: 16,
    borderBottom: "0.5px solid #999999",
  },
  box: {
    marginTop: 5,
    marginHorizontal: 20,
    flexWrap: "wrap",
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
    marginLeft: 4,
  },
  basicText: {
    fontWeight: "light",
    fontSize: 12,
  },
});

type ExperienceProps = {
  experiences: ExperienceType[];
  experienceTime: string;
};

// Create Document Component
export const Experience: FC<ExperienceProps> = ({
  experiences,
  experienceTime,
}) => (
  <View style={styles.box}>
    <Text style={styles.blockTitle}>Work experience — {experienceTime}</Text>
    {experiences.map((experience) => (
      <View style={styles.flex} key={experience.company}>
        <View style={styles.leftSide}>
          <Text style={styles.leftText}>{experience.date}</Text>
          <Text style={styles.leftText}>{experience.period}</Text>
        </View>
        <View style={styles.rightSide}>
          <Text style={styles.rightTitle}>{experience.company}</Text>
          <Text style={styles.rightTitle}>{experience.position}</Text>

          <View style={{ flexDirection: "column", width: 400 }}>
            {experience.cases.map((expCase) => (
              <View
                style={{ flexDirection: "row", marginBottom: 4, marginTop: 4 }}
                key={expCase}
              >
                <Text style={{ marginHorizontal: 8 }}>•</Text>
                <Text style={styles.basicText}>{expCase}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    ))}
  </View>
);
