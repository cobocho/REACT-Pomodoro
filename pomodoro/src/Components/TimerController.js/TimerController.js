import classes from "./TimerController.module.css";
import Button from "../UI/Button";

const TimerController = () => {
  return (
    <section className={classes["timer-controller"]}>
      <Button>START</Button>
      <Button>STOP</Button>
      <Button>RESET</Button>
    </section>
  );
};

export default TimerController;
