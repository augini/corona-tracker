import React, { useState, useEffect, useContext } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { FetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const CountryPicker = ({ handleChange }) => {
  //theme variables
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const bg = isLightTheme ? light.bg : dark.bg;
  const ui = isLightTheme ? light.ui : dark.ui;
  const syntax = isLightTheme ? light.syntax : dark.syntax;

  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      setFetchedCountries(await FetchCountries());
    };

    FetchAPI();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        default=""
        onChange={(e) => handleChange(e.target.value)}
        style={{ color: syntax }}
      >
        <option value="" style={{ backgroundColor: bg }}>
          Global
        </option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country} style={{ backgroundColor: bg }}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
