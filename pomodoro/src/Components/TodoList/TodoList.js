import { todoActions } from "../../store/todo-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import classes from "./TodoList.module.css";

import Todo from "../Todo/Todo";
import { modalActions } from "../../store/modal-slice";

const TodoList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initTodos = JSON.parse(localStorage.getItem("todos"));
    if (initTodos) dispatch(todoActions.setup(initTodos));
  }, [dispatch]);

  const addHandler = () => {
    dispatch(modalActions.changeMode("add"));
    props.onModalOpen();
  };

  const todos = useSelector((state) => state.todo.todos);

  let todoContent = <p>Nothing</p>;

  if (todos.length > 0) {
    todoContent = todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          time={todo.time}
          onModalOpen={props.onModalOpen}
        />
      );
    });
  }

  return (
    <section className={classes["todo-list"]}>
      <div>
        <h2>TO DO</h2>
        <button className={classes.plus} onClick={addHandler}>
          +
        </button>
      </div>
      {todoContent}
    </section>
  );
};

export default TodoList;
