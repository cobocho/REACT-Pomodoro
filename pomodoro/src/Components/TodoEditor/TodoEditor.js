import Modal from "../UI/Modal";

import classes from "./TodoEditor.module.css";
import Button from "../UI/Button";
import { useEffect, useRef, useState } from "react";

import timerIsValid from "../../Utils/validatior";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/todo-slice";

const TodoEditor = (props) => {
  const [title, setTitle] = useState("");
  const [min, setMin] = useState("");
  const [sec, setSec] = useState("");

  const [titleValidation, setTitleValidation] = useState(true);
  const [minValidation, setMinValidation] = useState(true);
  const [secValidation, setSecValidation] = useState(true);

  const dispatch = useDispatch();

  const modalMode = useSelector((state) => state.modal.mode);

  const editTargetId = useSelector((state) => state.todo.editTargetId);

  const titleChangehandler = (event) => {
    setTitle(event.target.value);
  };

  const minChangehandler = (event) => {
    let chaangedMin = event.target.value;
    if (chaangedMin.length === 1) chaangedMin = "0" + chaangedMin;
    setMin(chaangedMin);
  };

  const secChangehandler = (event) => {
    let chaangedSec = event.target.value;
    if (chaangedSec.length === 1) chaangedSec = "0" + chaangedSec;
    setSec(chaangedSec);
  };

  const clickHandler = (event) => {
    event.preventDefault();

    const id = `todo${Math.random()}`;

    const todo = {
      title,
      time: min + " : " + sec,
    };

    if (modalMode === "add") {
      todo.id = id;
    }

    const [titleIsValid, MinIsValid, SecIsValid] = timerIsValid(todo);
    setTitleValidation(titleIsValid);
    setMinValidation(MinIsValid);
    setSecValidation(SecIsValid);

    if (titleIsValid && MinIsValid && SecIsValid) {
      if (modalMode === "add") {
        dispatch(todoActions.add(todo));
      }
      if (modalMode === "edit") {
        dispatch(
          todoActions.edit({
            id: editTargetId,
            changedTodo: { ...todo, id: editTargetId },
          })
        );
      }

      props.onClose();
    }
  };

  const titleRef = useRef();
  const minRef = useRef();
  const secRef = useRef();

  const edittedTime = useSelector((state) => state.timer.settedTime);
  const currentTitle = useSelector((state) => state.timer.title);
  const [currentMin, currentSec] = edittedTime.split(" : ");

  useEffect(() => {
    if (modalMode === "edit") {
      titleRef.current.value = currentTitle;
      minRef.current.value = currentMin;
      secRef.current.value = currentSec;

      setTitle(currentTitle);
      setMin(currentMin);
      setSec(currentSec);
    }
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <h2>TO DO EDIT</h2>
      <form className={classes["todo-editor"]}>
        <div className={classes["todo-title"]}>
          <label htmlFor="todo-title-input">TITLE</label>
          <input
            ref={titleRef}
            type="text"
            id="todo-title-input"
            onChange={titleChangehandler}
            className={titleValidation ? "" : classes.invalid}
          ></input>
          {!titleValidation && <p>Please enter a valid title (1~20 Length)</p>}
        </div>
        <div className={classes["todo-timer"]}>
          <label htmlFor="minute-input">MINUTE</label>
          <input
            ref={minRef}
            onChange={minChangehandler}
            type="text"
            id="minute-input"
            className={minValidation ? "" : classes.invalid}
          ></input>
          {!minValidation && <p>Please enter a valid minute (0~99)</p>}
          <label htmlFor="second-input">SECOND</label>
          <input
            ref={secRef}
            onChange={secChangehandler}
            type="text"
            id="second-input"
            className={secValidation ? "" : classes.invalid}
          ></input>
          {!secValidation && <p>Please enter a valid second (0~59)</p>}
        </div>
        <Button type="click" onClick={clickHandler}>
          {modalMode.toUpperCase()}
        </Button>
      </form>
    </Modal>
  );
};

export default TodoEditor;
