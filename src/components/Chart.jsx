import { StylesProvider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "../styles/Chart.module.css";
import covidApi from "../api/covidApi";
import { Grid } from "@material-ui/core";

const Chart = ({ location, countryData: { confirmed, recovered, deaths } }) => {
  const [dailyData, setDailydata] = useState([]);

  const fetchDailyData = async () => {
    const { data } = await covidApi.get("/api/daily");
    setDailydata(data);
  };

  useEffect(() => {
    fetchDailyData();
  }, []);

  console.log(location);
  return (
    <Grid container className={styles.Chart} justify='center'>
      <Grid className={styles.ChartContainer} item xs={12} md={7}>
        {location === "global" ? (
          dailyData.length && (
            <Line
              data={{
                labels: dailyData.map(({ reportDate }) => reportDate),
                datasets: [
                  {
                    data: dailyData.map(({ totalConfirmed }) => totalConfirmed),
                    label: "Infected",
                    borderColor: "#4fd5de",
                    fill: true,
                    backgroundColor: "#d8fbfd82",
                    pointBorderWidth: 0,
                    pointBorderColor: "transparent",
                  },
                  {
                    data: dailyData.map(({ deaths }) => deaths.total),
                    label: "Deaths",
                    borderColor: "red",
                    fill: true,
                    borderColor: "#ff6f6a",
                    backgroundColor: "#ffe5e45e",
                    pointBorderWidth: 0,
                    pointBorderColor: "transparent",
                  },
                ],
              }}
            />
          )
        ) : (
          <Bar
            data={{
              labels: ["INFECTED", "RECOVERED", "DEATHS"],
              datasets: [
                {
                  label: "People",
                  data: [confirmed.value, recovered.value, deaths.value],
                  backgroundColor: ["#d5f4f6", " #e0f3df", "#ffe5e4"],
                },
              ],
            }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Chart;
