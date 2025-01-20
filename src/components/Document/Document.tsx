import { FC } from "react";
import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import {
  DesiredPositionType,
  EducationType,
  ExperienceType,
  MainInfoType,
} from "../../common/types";
import { MainInfo } from "./Components/MainInfo";
import { EducationsBlock } from "./Components/EducationsBlock";
import { AdditionalInfoBlock } from "./Components/AdditionalInfoBlock";
import { DesiredPositionBlock } from "./Components/DesiredPositionBlock";

// Create styles
const styles = StyleSheet.create({
  page: {
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#ffffff",
  },
});

type DocumentProps = {
  mainInfo: MainInfoType;
  educations?: EducationType[];
  additionalInfo?: string;
  desiredPositionInfo: DesiredPositionType;
  skills: string[];
  languages: string[];
  experiences: ExperienceType[];
};

// Create Document Component
export const MyDocument: FC<DocumentProps> = ({
  mainInfo,
  educations,
  additionalInfo = "",
  desiredPositionInfo,
  skills,
  languages,
  experiences,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <MainInfo
          surName={mainInfo.lastName}
          name={mainInfo.firstName}
          birthDate={mainInfo.birthDate ?? ""}
          city={mainInfo.city ?? ""}
          phone={mainInfo.phoneNumber}
          location={mainInfo.country ?? ""}
          email={mainInfo.email}
          country={mainInfo.country ?? ""}
          businessDetails={mainInfo.businessDetails ?? ""}
        />

        <DesiredPositionBlock
          desiredPosition={desiredPositionInfo.desiredPosition}
          busyness={desiredPositionInfo.busyness}
          specializations={desiredPositionInfo.specializations}
          workSchedule={desiredPositionInfo.workSchedule}
        />

        <Experience experiences={experiences} experienceTime="4 years" />

        <EducationsBlock educations={educations || []} />

        <Skills
          title="Skills"
          languages={languages}
          skills={skills}
        />

        <AdditionalInfoBlock additionalInfo={additionalInfo} />
      </Page>
    </Document>
  );
};
