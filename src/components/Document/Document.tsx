import { FC } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  section2: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#909090",
  },
});

type DocumentProps = {
  title?: string;
};

// Create Document Component
export const MyDocument: FC<DocumentProps> = ({ title }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{title}</Text>
        <View style={styles.section2}>
          <Text>Profile</Text>
          <Text>Settings</Text>
          <Text>Messages</Text>
          <Text>Download</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
