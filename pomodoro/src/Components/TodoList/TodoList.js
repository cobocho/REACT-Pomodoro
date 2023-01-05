import { todoActions } from "../../store/todo-slice";
import { useDispatch, useSelector } from "react-redux";

import classes from "./TodoList.module.css";

import Todo from "../Todo/Todo";

const TodoList = (props) => {
  const dispatch = useDispatch();

  const addHandler = () => {
    const title = prompt("할 일을 적어주세요!");
    const time = prompt("집중 시간을 입력해주세요!");
    dispatch(todoActions.add({ title, time }));
  };

  const todos = useSelector((state) => state.todo.todos);

  const todoContent = todos.map((todo, idx) => {
    return <Todo key={idx} title={todo.title} time={todo.time} />;
  });

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
