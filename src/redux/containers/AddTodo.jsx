import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(1)
  },
  addTodo: {
    backgroundColor: "#fcf8f3",
    width: "100%",

    MozBoxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    WebkitBoxShadow:
      "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    [theme.breakpoints.up("md")]: {
      width: "50%"
    }
  },
  input: {
    margin: theme.spacing(2),
    width: "100%"
  },
  button: {
    margin: theme.spacing(2),
    fontSize: "12px",
    [theme.breakpoints.up("lg")]: {
      left: "10%",
      marginTop: "12%",
      padding: "14px 20px"
    }
  }
}));

const AddTodo = ({ dispatch }) => {
  let input;
  const classes = useStyles();

  return (
    <Box className={classes.addTodo}>
      <form
        className={classes.root}
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <Grid container>
          <Grid item xs={9}>
            <TextField
              id="outlined-basic"
              inputRef={node => (input = node)}
              label="Todo Text"
              variant="outlined"
              className={classes.input}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              color="primary"
            >
              Add Todo
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default connect()(AddTodo);
