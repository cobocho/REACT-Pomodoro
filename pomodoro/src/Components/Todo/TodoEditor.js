import Modal from "../UI/Modal";

import classes from "./TodoEditor.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const TodoEditor = (props) => {
  const [title, setTitle] = useState("");
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const titleChangehandler = (event) => {
    setTitle(event.target.value);
  };

  const minChangehandler = (event) => {
    setMin(event.target.value);
  };

  const secChangehandler = (event) => {
    setSec(event.target.value);
  };

  const clickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Modal onClose={props.onClose}>
      <h2>TO DO EDIT</h2>
      <form className={classes["todo-editor"]}>
        <div className={classes["todo-title"]}>
          <label htmlFor="todo-title-input">TITLE</label>
          <input
            type="text"
            id="todo-title-input"
            minLength={1}
            maxLength={20}
            onChange={titleChangehandler}
          ></input>
        </div>
        <div className={classes["todo-timer"]}>
          <label htmlFor="minute-input">MINUTE</label>
          <input
            onChange={minChangehandler}
            type="number"
            id="minute-input"
            min={0}
            max={999}
          ></input>
          <label htmlFor="second-input">SECOND</label>
          <input
            onChange={secChangehandler}
            type="number"
            id="second-input"
            min={0}
            max={59}
          ></input>
        </div>
        <Button type="click" onClick={clickHandler}>
          Change
        </Button>
      </form>
    </Modal>
  );
};

export default TodoEditor;
