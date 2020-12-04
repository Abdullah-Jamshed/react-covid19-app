import React from "react";
import styles from "../styles/Header.module.css";
import useWebAnimation, { fadeIn, } from "@wellyshen/use-web-animations";

const Header = () => {
  const { ref } = useWebAnimation({ ...fadeIn });
  return (
    <div ref={ref} className={styles.Header}>
      <h1>COVID TRACKER APP</h1>
    </div>
  );
};

export default Header;
