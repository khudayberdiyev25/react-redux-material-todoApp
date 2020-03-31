import React from "react";
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Button
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  todo: {
    backgroundColor: "#fcf8f3",
    width: "100%",
    MozBoxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    WebkitBoxShadow:
      "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
  },
  context: {
    margin: theme.spacing(2),
    padding: "8px 0"
  }
}));

const Todo = ({ onChange, onClick, completed, text, id }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
    onChange();
  };
  return (
    <Grid
      item
      xs
      className={classes.todo}
      style={{ backgroundColor: completed ? "#639a67" : "#fcf8f3" }}
    >
      <Grid xs={12} container className={classes.context}>
        <Grid xs={8}>
          <Typography variant="h4">
            {id} . {text}
          </Typography>
        </Grid>
        <Grid xs={4}>
          <FormControlLabel
            control={
              <Switch
                checked={completed ? true : false}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="Done"
            style={{
              marginLeft: "5px"
            }}
          />
          <Button color="secondary" onClick={onClick}>
            <DeleteForeverIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Todo;
