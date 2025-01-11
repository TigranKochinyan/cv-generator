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

type AdditionalInfoBlockProps = {
  additionalInfo: string;
};

// Create Document Component
export const AdditionalInfoBlock: FC<AdditionalInfoBlockProps> = ({
  additionalInfo,
}) => (
  <View style={styles.block}>
    <Text style={styles.blockTitle}>Additional Information</Text>
    {/* {subTitle && <Text style={styles.blockSubTitle}>{subTitle}</Text>} */}

    <View style={styles.content}>
      <View style={styles.leftSide}>
        <Text style={styles.description}>About Me</Text>
      </View>
      <View style={styles.rightSide}>
        <Text style={styles.contentText}>{additionalInfo}</Text>
      </View>
    </View>
  </View>
);
