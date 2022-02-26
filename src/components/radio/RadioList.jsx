import React, { useContext } from "react";
import styles from "./styles/styles.module.scss";

import RadioListItem from "./RadioListItem";

const RadioList = (props) => {
  return (
    <div className={styles.acc}>
      {props.radios.map(({ name, image, frequency }, index) => (
        <RadioListItem
          key={index}
          name={name}
          image={image}
          frequency={frequency}
        />
      ))}
    </div>
  );
};

export default RadioList;
