import React from "react";
import styles from "../styles/App.module.css";

const Location = ({ location }) => {
  return (
    <div className={styles.location}>
      <h3>
        Current Location : <span className={styles.locationName}>{location}</span>
      </h3>
    </div>
  );
};

export default Location;
