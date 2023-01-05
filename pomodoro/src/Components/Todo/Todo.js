import classes from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store/todo-slice";
import { timerActions } from "../../store/timer-slice";
import Button from "../UI/Button";

const Todo = ({ title, time, onModalOpen }) => {
  const dispatch = useDispatch();

  const setHandler = () => {
    dispatch(timerActions.setTimer(time));
  };

  const deleteHandler = () => {
    dispatch(todoActions.delete(title));
  };

  const editHandler = () => {
    onModalOpen();
  };

  return (
    <article className={classes["todo"]}>
      <div>
        <strong>{title}</strong>
        <h4>{time}</h4>
      </div>
      <div className={classes["button-list"]}>
        <Button onClick={setHandler}>SET</Button>
        <Button onClick={editHandler}>EDIT</Button>
        <Button onClick={deleteHandler}>DELETE</Button>
      </div>
    </article>
  );
};

export default Todo;
