import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    fontWeight: "800",
    padding: "15px",
    color: "#e8f9e9"
  }
}));

const AppTitle = () => {
  const classes = useStyles();

  return (
    <Typography variant="h3" className={classes.title}>
      TODO APP
    </Typography>
  );
};

export default AppTitle;
