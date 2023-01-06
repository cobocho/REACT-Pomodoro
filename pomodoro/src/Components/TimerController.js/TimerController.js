import classes from "./TimerController.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import { timerActions } from "../../store/timer-slice";

const TimerController = () => {
  const dispatch = useDispatch();

  const active = useSelector((state) => state.timer.active);
  const currentTime = useSelector((state) => state.timer.time);

  const startHandler = () => {
    if (currentTime === "00 : 00") return;
    dispatch(timerActions.toggleActive());
    dispatch(
      timerActions.setCustomInterval(
        setInterval(() => {
          dispatch(timerActions.count());
        }, 1000)
      )
    );
  };

  const stopHandler = () => {
    dispatch(timerActions.clearCustomInterval());
    dispatch(timerActions.toggleActive());
  };

  const resetHandler = () => {
    dispatch(timerActions.resetTimer());
  };

  return (
    <section className={classes["timer-controller"]}>
      {!active && <Button onClick={startHandler}>START</Button>}
      {active && <Button onClick={stopHandler}>STOP</Button>}
      <Button onClick={resetHandler}>RESET</Button>
    </section>
  );
};

export default TimerController;
