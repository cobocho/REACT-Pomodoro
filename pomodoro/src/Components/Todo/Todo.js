import classes from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";

const Todo = ({ title, time }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(todoActions.delete(title));
  };
  const editHandler = () => {
    const newTitle = prompt("바꿀 이름을 입력해주세요!");
    dispatch(todoActions.edit({ title, newTitle }));
  };
  return (
    <article className={classes["todo"]}>
      <div>
        <strong>{title}</strong>
        <h4>{time}</h4>
      </div>
      <div className={classes["button-list"]}>
        <button>START</button>
        <button onClick={editHandler}>EDIT</button>
        <button onClick={deleteHandler}>DELETE</button>
      </div>
    </article>
  );
};

export default Todo;
