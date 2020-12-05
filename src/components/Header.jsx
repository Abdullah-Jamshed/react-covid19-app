import React from "react";
import styles from "../styles/Header.module.css";
import useWebAnimation, { fadeIn } from "@wellyshen/use-web-animations";
import covidIcon from "../images/covidIcon.png";

const Header = () => {
  const { ref } = useWebAnimation({ ...fadeIn });
  return (
    <div ref={ref} className={styles.Header}>
      <h1>C</h1>
      <span>
        <img src={covidIcon} width={40} />
      </span>
      <h1>VID TRACKER APP</h1>
    </div>
  );
};

export default Header;
