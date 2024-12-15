import { FC } from "react";
// import { UserInfoContext } from "../../context/UserInfoContext";
import { CustomTextArea } from "./CustomTextArea";
import { MainInfoForm } from "./MainInfoForm";
import { SocialMediaForm } from "./SocialMediaForm";
import styles from "./styles.module.scss";

export const Editor: FC = () => {


  return (
    <div className={styles.root}>
      <MainInfoForm />
      <SocialMediaForm />
      <CustomTextArea />
    </div>
  );
};
