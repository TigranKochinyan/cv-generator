import { FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { DesiredPositionType } from "../../../common/types";

// Create styles
const styles = StyleSheet.create({
  positionBox: {
    marginHorizontal: 20,
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
