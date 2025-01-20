import { FC } from "react";
import { CustomTextArea } from "./CustomTextArea";
import { MainInfoForm } from "./MainInfoForm";
import { SocialMediaForm } from "./SocialMediaForm";
import { EducationsForm } from "./EducationForm";
import { AdditionalInfoForm } from "./AdditionalInfoForm";
import { DesiredPositionForm } from "./DesiredPositionForm";
import { SkillsAndLanguagesForm } from "./SkillsAndLanguagesForm";
import styles from "./styles.module.scss";
import { LanguagesForm } from "./LangagesForm";
import { ExperienceForm } from "./ExperiencesForms/ExperienceForm";
import { ExperiencesForms } from "./ExperiencesForms";

export const Editor: FC = () => {
  return (
    <div className={styles.root}>
      <MainInfoForm />
      <SocialMediaForm />
      {/* <CustomTextArea /> */}
      <DesiredPositionForm />
      <AdditionalInfoForm />
      <EducationsForm />
      <LanguagesForm />
      <SkillsAndLanguagesForm />
      <ExperiencesForms  />
    </div>
  );
};
