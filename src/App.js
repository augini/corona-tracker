import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components/";
import { FetchData } from "./api";

const App = () => {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  }, []);

  const handleChange = async (country) => {
    //fetch the data
    const data = await FetchData(country);
    setData(data);
    setCountry(country);

    //set the state
    console.log(country);
  };

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
