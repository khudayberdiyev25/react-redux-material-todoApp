import React from "react";
import { Grid, Box } from "@material-ui/core";
import Todo from "./Todo.jsx";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  todoList: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%"
    }
  }
}));

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const classes = useStyles();

  return (
    <Box className={classes.todoList}>
      <Grid>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onChange={() => toggleTodo(todo.id)}
            onClick={() => deleteTodo(todo.id)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TodoList;
