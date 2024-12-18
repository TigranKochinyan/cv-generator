import { FC, useContext } from "react";
// import { PDFViewer } from "@react-pdf/renderer";

import styles from "./styles.module.scss";
// import { MyDocument } from "../Document/Document";
import { UserInfoContext } from "../../context/UserInfoContext";

export const Viewer: FC = () => {
  const userInfo = useContext(UserInfoContext);

  console.log('userInfo::', userInfo);

  return (
    <div className={styles.root}>
      {/* <PDFViewer className={styles.viewer}>
       <MyDocument />
      </PDFViewer> */}
    </div>
  );
};
