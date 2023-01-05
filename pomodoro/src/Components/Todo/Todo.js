import classes from "./Todo.module.css";

const Todo = (props) => {
  return (
    <article className={classes["todo"]}>
      <div>
        <strong>React</strong>
        <h4>50:30</h4>
      </div>
      <div className={classes["button-list"]}>
        <button>START</button>
        <button>STOP</button>
        <button>EDIT</button>
      </div>
    </article>
  );
};

export default Todo;
