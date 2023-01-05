import classes from "./TodoList.module.css";

import Todo from "../Todo/Todo";

const TodoList = (props) => {
  return (
    <section className={classes["todo-list"]}>
      <h2>TO DO</h2>
      <Todo />
      <Todo />
    </section>
  );
};

export default TodoList;
