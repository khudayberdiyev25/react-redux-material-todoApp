import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Grid } from "@material-ui/core";
import AddTodo from "../redux/containers/AddTodo";
import AppTitle from "./AppTitle";
import Footer from "./Footer.jsx";
import VisibleTodoList from "../redux/containers/VisibleTodoList.jsx";

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box"
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid direction="column" container alignItems="center">
          <AppTitle />
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Grid>
        <CssBaseline />
      </Container>
    </div>
  );
};

export default App;
