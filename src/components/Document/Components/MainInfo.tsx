import { FC } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
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
});

type MainInfoProps = {
  name: string;
  surName: string;
  birthDate: string;
  phone: string;
  email: string;
  location: string;
  country: string;
  city: string;
  businessDetails: string;
};

// Create Document Component
export const MainInfo: FC<MainInfoProps> = ({
  name,
  surName,
  birthDate,
  businessDetails,
  city,
  country,
  email,
  location,
  phone,
}) => {
  return (
    <View>
      <View style={styles.heading}>
        <Text style={styles.name}>
          {surName} {name}
        </Text>
        <Text style={styles.age}>Male, born on {birthDate}</Text>

        <View style={styles.contacts}>
          <Text style={styles.contactText}>{phone}</Text>
          <Text style={styles.contactText}>{email}</Text>
        </View>

        <View style={styles.contacts}>
          <Text style={styles.contactText}>Location: {location}</Text>
          <Text style={styles.contactText}>Citizenship: {country}</Text>
          <Text style={styles.contactText}>{businessDetails}</Text>
        </View>
      </View>
    </View>
  );
};
