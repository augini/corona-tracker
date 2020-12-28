import React, { useEffect, useState, useContext } from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { FetchDailyData } from "../../api";
import { ThemeContext } from "../../context/ThemeContext";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  //theme variables

  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const bg = isLightTheme ? light.bg : dark.bg;
  const ui = isLightTheme ? light.ui : dark.ui;
  const syntax = isLightTheme ? light.syntax : dark.syntax;

  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      FetchDailyData().then((response) => {
        console.log({ response });
      });
      const response = await FetchDailyData();
      console.log({ response });
      setDailyData(await FetchDailyData());
    };

    FetchAPI();
  }, []);

  const LineChart =
    dailyData !== undefined ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map((data) => data.confirmed),
              label: "Confirmed",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: dailyData.map((data) => data.deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const BarChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? BarChart : LineChart}</div>
  );
};

export default Chart;
