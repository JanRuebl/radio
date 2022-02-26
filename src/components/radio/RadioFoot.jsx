import styles from "./styles/styles.module.scss";

import { useContext } from "react";
import { RadioContext } from "./RadioContext";

const RadioFoot = () => {
  const currentRadio = useContext(RadioContext);

  return (
    <div className={styles.foot}>
      {currentRadio.radio ? (
        <div className={styles.foot_group}>
          <p className={styles.footHead}>currently playing </p>
          <p className={styles.footInfo}>{currentRadio.radio}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RadioFoot;
