import React, { useState, useContext, useEffect } from "react";
import styles from "./styles/styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { RadioContext, PowerContext } from "./RadioContext";

const RadioListItem = (props) => {
  const { name, image, frequency } = props;

  const [isActive, setActive] = useState(false);
  const { hasPower, setPower } = useContext(PowerContext);
  const { radio, setRadio } = useContext(RadioContext);

  useEffect(() => {
    if (!hasPower) {
      setActive(false);
      setRadio(null);
    }
  }, [hasPower]);

  const toggle = () => {
    if (!isActive) {
      setActive(true);
      setPower(true);
      setRadio(name);
    }
    if (isActive) {
      setActive(false);
      setRadio(null);
    }
  };

  return (
    <div className={styles.acc_item}>
      <div
        className={
          isActive && hasPower ? styles.acc_item_pictureGroup : styles.hide
        }
      >
        <FontAwesomeIcon icon={faMinus} />
        <img src={image} alt={name} />
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div onClick={toggle} className={styles.acc_item_textGroup}>
        <p>{name}</p>
        <p>
          <b>{frequency}</b>
        </p>
      </div>
    </div>
  );
};

export default RadioListItem;
