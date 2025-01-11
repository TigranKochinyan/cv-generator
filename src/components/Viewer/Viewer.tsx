import { FC, useContext } from "react";
import { PDFViewer } from "@react-pdf/renderer";

import styles from "./styles.module.scss";
import { MyDocument } from "../Document/Document";
import { UserInfoContext } from "../../context/UserInfoContext";

export const Viewer: FC = () => {
  const userInfo = useContext(UserInfoContext);

  if (!userInfo) {
    return null;
  }

  return (
    <div className={styles.root}>
      <PDFViewer className={styles.viewer}>
        <MyDocument
          mainInfo={userInfo.mainInfo}
          educations={userInfo.educations}
          additionalInfo={userInfo.additionalInfo}
        />
      </PDFViewer>
    </div>
  );
};
