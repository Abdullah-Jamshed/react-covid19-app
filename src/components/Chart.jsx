import { StylesProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styles from "../styles/Chart.module.css";
import covidApi from "../api/covidApi";
import { Grid } from "@material-ui/core";

const Chart = () => {
  const [dailyData, setDailydata] = useState([]);

  const fetchDailyData = async () => {
    const { data } = await covidApi.get("/api/daily");
    setDailydata(data);
  };

  useEffect(() => {
    fetchDailyData();
  }, []);

  return (
    <Grid container className={styles.Chart} justify='center'>
      {dailyData.length !== 0 && (
        <Grid className={styles.ChartContainer} item xs={12} md={7}>
          <Line
            data={{
              labels: dailyData.map(({ reportDate }) => reportDate),
              datasets: [
                {
                  data: dailyData.map(({ totalConfirmed }) => totalConfirmed),
                  label: "Infected",
                  borderColor: "#4fd5de",
                  fill: true,
                  backgroundColor: "#d8fbfd82 ",
                  pointBorderWidth: 0,
                  pointBorderColor: "transparent",
                },
                {
                  data: dailyData.map(({ deaths }) => deaths.total),
                  label: "Deaths",
                  borderColor: "red",
                  fill: true,
                  borderColor: "#ff6f6a",
                  backgroundColor: "#ffe5e45e ",
                  pointBorderWidth: 0,
                  pointBorderColor: "transparent",
                },
              ],
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Chart;
