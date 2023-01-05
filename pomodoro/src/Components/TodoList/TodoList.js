import { todoActions } from "../../store/todo-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import classes from "./TodoList.module.css";

import Todo from "../Todo/Todo";

const TodoList = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initTodos = JSON.parse(localStorage.getItem("todos"));
    if (initTodos) dispatch(todoActions.setup(initTodos));
  }, []);

  const addHandler = () => {
    const title = prompt("할 일을 적어주세요!");
    const time = prompt("집중 시간을 입력해주세요!");
    dispatch(todoActions.add({ title, time }));
  };

  const todos = useSelector((state) => state.todo.todos);

  let todoContent = <p>Nothing</p>;

  if (todos.length > 0) {
    todoContent = todos.map((todo, idx) => {
      return <Todo key={idx} title={todo.title} time={todo.time} />;
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
