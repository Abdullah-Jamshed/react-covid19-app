import React, { useState, useEffect } from "react";
import { makeStyles, FormControl, InputLabel, Select, MenuItem, Grid, NativeSelect } from "@material-ui/core";
import covidApi from "../api/covidApi";
import styles from "../styles/Selector.module.css";
import useWebAnimation, { bounceInLeft } from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 240,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Selector = ({ location, setLocation }) => {
  const classes = useStyles();
  const [countriesList, setCountriesList] = useState([]);

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  const fetchCountries = async () => {
    const {
      data: { countries },
    } = await covidApi.get("/api/countries");
    setCountriesList(countries);
  };

  const { ref } = useWebAnimation({ ...bounceInLeft });

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div ref={ref} className={styles.Selector}>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>Country</InputLabel>
        <Select labelId='demo-simple-select-outlined-label' id='demo-simple-select-outlined' value={location} onChange={handleChange} label='Country'>
          <MenuItem value='global'>Global</MenuItem>
          {countriesList.map((country, i) => {
            return (
              <MenuItem key={i} value={country.name}>
                {country.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Selector;
