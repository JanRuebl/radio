import { useState, useEffect } from "react";
import styles from "./styles/styles.module.scss";

import RadioHead from "./RadioHead";
import RadioList from "./RadioList";
import RadioFoot from "./RadioFoot";

import { RadioContext, PowerContext } from "./RadioContext";

const api = "https://jobapi.teclead-ventures.de/recruiting/radios";

const Radio = () => {
  const [stations, setStations] = useState();
  const [isLoading, setLoading] = useState(true);

  const [radio, setRadio] = useState(null);
  const [hasPower, setPower] = useState(false);

  const getStations = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setStations(data.radios);
    setLoading(false);
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <div className={styles.radio}>
      <PowerContext.Provider value={{ hasPower, setPower }}>
        <RadioContext.Provider value={{ radio, setRadio }}>
          <RadioHead />
          <section className={styles.main}>
            {isLoading ? <p>Loading...</p> : <RadioList radios={stations} />}
          </section>
          <RadioFoot />
        </RadioContext.Provider>
      </PowerContext.Provider>
    </div>
  );
};

export default Radio;
