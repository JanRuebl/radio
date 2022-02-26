import { useContext } from "react";
import styles from "./styles/styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { PowerContext } from "./RadioContext";

const RadioHead = () => {
  const { hasPower, setPower } = useContext(PowerContext);
  return (
    <div className={styles.head}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <p>stations</p>
      <FontAwesomeIcon
        onClick={() => setPower(false)}
        className={styles.powerBtn}
        icon={faPowerOff}
      />
    </div>
  );
};

export default RadioHead;
