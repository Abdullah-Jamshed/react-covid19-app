import React, { useEffect, useState } from "react";
import styles from "./styles/App.module.css";
import covidApi from "./api/covidApi";
import Card from "./components/Cards";
import Selector from "./components/Selector";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("global");

  const fetchData = async () => {
    const params = location.toLowerCase() === "global" ? "/api" : `/api/countries/${location.toLowerCase()}`;
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await covidApi.get(params);
    setData({ confirmed, recovered, deaths, lastUpdate });
  };

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <div className={styles.App}>
      <Card data={data} />
      <Selector location={location} setLocation={setLocation} />
    </div>
  );
};

export default App;
