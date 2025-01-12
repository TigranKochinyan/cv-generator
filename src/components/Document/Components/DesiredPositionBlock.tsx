import { FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { DesiredPositionType } from "../../../common/types";

// Create styles
const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#ffffff",
  },
  name: u
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
    borderBottom: "0.5px solid #999999",
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
    borderBottom: "0.5px solid #999999",
    fontSize: 16,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  specInfoText: {
    fontSize: 14,
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
    marginLeft: 4,
  },
  section2: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#909090",
  },
});

type DesiredPositionBlockProps = DesiredPositionType;

// Create Document Component
export const DesiredPositionBlock: FC<DesiredPositionBlockProps> = ({
  busyness,
  desiredPosition,
  specializations,
  workSchedule,
}) => {
  return (
    <View>
      <View style={styles.positionBox}>
        <Text style={styles.title}>Desired position</Text>
        <View style={styles.ml}>
          <Text style={styles.subTitle}>{desiredPosition}</Text>
          <Text style={styles.specInfoText}>
            Specializations: {specializations}
          </Text>
          <Text style={styles.specInfoText} wrap>
            Busyness: {busyness}
          </Text>
          <Text style={styles.specInfoText} wrap>
            Work schedule: {workSchedule}
          </Text>
        </View>
      </View>
    </View>
  );
};
