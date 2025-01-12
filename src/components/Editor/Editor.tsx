import { FC } from "react";
import { CustomTextArea } from "./CustomTextArea";
import { MainInfoForm } from "./MainInfoForm";
import { SocialMediaForm } from "./SocialMediaForm";
import { EducationsForm } from "./EducationForm";
import { AdditionalInfoForm } from "./AdditionalInfoForm";
import { DesiredPositionForm } from "./DesiredPositionForm";
import styles from "./styles.module.scss";

export const Editor: FC = () => {
  return (
    <div className={styles.root}>
      <MainInfoForm />
      <SocialMediaForm />
      {/* <CustomTextArea /> */}
      <DesiredPositionForm />
      <AdditionalInfoForm />
      <EducationsForm />
    </div>
  );
};
