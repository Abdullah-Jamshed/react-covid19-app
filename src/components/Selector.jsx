import React, { useState, useEffect } from "react";
import { makeStyles, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import covidApi from "../api/covidApi";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
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

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div>
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
