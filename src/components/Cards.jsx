import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import CountUp from "react-countup";
import styles from "../styles/Card.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const detailBoxes = [
    { heading: "INFECTED", value: confirmed },
    { heading: "RECOVERED", value: recovered },
    { heading: "DEATHS", value: deaths },
  ];
  return (
    <div>
      <Grid container justify='center'>
        {detailBoxes.map(({ heading, value }, index) => {
          return (
            <Grid key={index} item xs={12} sm={4} md={2}>
              <Card className={styles.Card} spacing={3}>
                {confirmed ? (
                  <CardContent>
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
