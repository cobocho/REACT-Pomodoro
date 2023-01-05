import classes from "./TimerController.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { timerActions } from "../../store/timer-slice";

const TimerController = () => {
  const dispatch = useDispatch();

  const startHandler = () => {
    setInterval(() => {
      console.log("count");
      dispatch(timerActions.count());
    }, 1000);
  };
  return (
    <section className={classes["timer-controller"]}>
      <Button onClick={startHandler}>START</Button>
      <Button>STOP</Button>
      <Button>RESET</Button>
    </section>
  );
};

export default TimerController;
