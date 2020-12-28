import React, { useContext } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
import { ThemeContext } from "../../context/ThemeContext";

import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);
  const bg = isLightTheme ? light.bg : dark.bg;
  const ui = isLightTheme ? light.ui : dark.ui;
  const syntax = isLightTheme ? light.syntax : dark.syntax;

  if (!confirmed) {
    return "Loading....";
  }

  document.body.style.backgroundColor = bg;

  const icon = isLightTheme ? <Brightness3Icon /> : <Brightness7Icon />;

  return (
    <div className={styles.container}>
      <IconButton
        edge="edge"
        aria-label="mode"
        onClick={toggleTheme}
        style={{ color: syntax }}
      >
        {icon}
      </IconButton>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
          style={{ backgroundColor: ui }}
        >
          <CardContent>
            <Typography gutterBottom style={{ color: syntax }}>
              Infected
            </Typography>

            <Typography variant="h5" style={{ color: syntax }}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=","
              ></CountUp>
            </Typography>

            <Typography style={{ color: syntax }}>
              {new Date(lastUpdate).toDateString()}
            </Typography>

            <Typography variant="body2" style={{ color: syntax }}>
              Number of active cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
          style={{ backgroundColor: ui }}
        >
          <CardContent>
            <Typography style={{ color: syntax }} gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" style={{ color: syntax }}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=","
              ></CountUp>
            </Typography>
            <Typography style={{ color: syntax }}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" style={{ color: syntax }}>
              Recovered cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
          style={{ backgroundColor: ui }}
        >
          <CardContent>
            <Typography style={{ color: syntax }} gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" style={{ color: syntax }}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=","
              ></CountUp>
            </Typography>
            <Typography style={{ color: syntax }}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" style={{ color: syntax }}>
              Death cases of Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
