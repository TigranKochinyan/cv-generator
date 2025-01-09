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

type BaseBlockProps = {
  blockTitle: string;
  subTitle?: string;
  leftText: string;
  content: {
    title?: string;
    description: string;
  };
};

// Create Document Component
export const BaseInfoBlock: FC<BaseBlockProps> = ({
  blockTitle,
  subTitle,
  content,
  leftText,
}) => (
  <View style={styles.block}>
    <Text style={styles.blockTitle}>{blockTitle}</Text>
    {subTitle && <Text style={styles.blockSubTitle}>{subTitle}</Text>}

    <View style={styles.content}>
      <View style={styles.leftSide}>
        <Text style={styles.description}>{leftText}</Text>
      </View>
      <View style={styles.rightSide}>
        {content.title && (
          <Text style={styles.contentTitle}>{content.title}</Text>
        )}
        <Text style={styles.contentText}>{content.description}</Text>
      </View>
    </View>
  </View>
);
