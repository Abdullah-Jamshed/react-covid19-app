import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import CountUp from "react-countup";
import styles from "../styles/Card.module.css";
import useWebAnimation, { fadeIn } from "@wellyshen/use-web-animations";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const detailBoxes = [
    { heading: "INFECTED", value: confirmed },
    { heading: "RECOVERED", value: recovered },
    { heading: "DEATHS", value: deaths },
  ];

  const { ref } = useWebAnimation({ ...fadeIn });
  return (
    <div ref={ref}>
      <Grid container justify='center'>
        {detailBoxes.map(({ heading, value }, index) => {
          const classType = heading === "INFECTED" ? styles.infected : heading === "RECOVERED" ? styles.recovered : styles.deaths;
          return (
            <Grid key={index} item xs={12} sm={4} md={3} lg={2}>
              <Card className={`${styles.Card} ${classType}`} spacing={3}>
                {confirmed ? (
                  <CardContent>
                    {heading === "INFECTED" ? (
                      <i className={`fa fa-users ${styles.icons}`} aria-hidden='true' />
                    ) : heading === "RECOVERED" ? (
                      <i className={`fa fa-male ${styles.icons}`} aria-hidden='true' />
                    ) : (
                      <i className={`fa fa-heartbeat ${styles.icons}`} aria-hidden='true' />
                    )}

                    <Typography color='textSecondary' variant='h6'>
                      {heading}
                    </Typography>
                    <Typography color='textSecondary'>
                      <CountUp start={0} end={value.value} separator=',' duration={2} />
                    </Typography>
                  </CardContent>
                ) : (
                  <CardContent style={{ width: 100, margin: "auto" }}>
                    <Skeleton style={{ marginTop: 10 }} variant='text' height={30} />
                    <Skeleton style={{ marginTop: 10 }} />
                  </CardContent>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Cards;
