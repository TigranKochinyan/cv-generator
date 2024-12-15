import { FC, useEffect } from "react";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  useEffect(() => {
    console.log("Header effect");
  }, []);

  return (
    <div className={styles.root}>
      <p>header</p>
    </div>
  );
};
