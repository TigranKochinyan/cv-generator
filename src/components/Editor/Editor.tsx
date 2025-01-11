import { FC } from "react";
import { CustomTextArea } from "./CustomTextArea";
import { MainInfoForm } from "./MainInfoForm";
import { SocialMediaForm } from "./SocialMediaForm";
import styles from "./styles.module.scss";
import { EducationsForm } from "./EducationForm";
import { AdditionalInfoForm } from "./AdditionalInfoForm/AdditionalInfoForm";

export const Editor: FC = () => {
  return (
    <div className={styles.root}>
      <MainInfoForm />
      <SocialMediaForm />
      <CustomTextArea />

      <AdditionalInfoForm additionalInfo="sadas" />

      <EducationsForm />
    </div>
  );
};
