import { FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { EducationType } from "../../../common/types";

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
  blockSubTitle: {
    fontSize: 16,
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
  description: {
    color: "#999999",
  },
  contentTitle: {
    fontSize: 16,
  },
  contentText: {
    fontSize: 14,
  },
});

type EducationsBlockProps = {
  educations: EducationType[];
};

export const EducationsBlock: FC<EducationsBlockProps> = ({ educations }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.blockTitle}>Education</Text>

      {educations.map((item) => (
        <View key={item.id}>
          <Text style={styles.blockSubTitle}>{item.title}</Text>

          <View style={styles.content}>
            <View style={styles.leftSide}>
              <Text style={styles.description}>{item.date}</Text>
            </View>
            <View style={styles.rightSide}>
              <Text style={styles.contentTitle}>{item.university}</Text>
              <Text style={styles.contentText}>{item.major}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};
