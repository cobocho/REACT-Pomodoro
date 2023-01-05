import classes from "./Timer.module.css";
import { useSelector } from "react-redux";

const Timer = (props) => {
  const timer = useSelector((state) => state.timer.timer);
  return (
    <section className={classes.timer}>
      <p className={classes.time}>{timer}</p>
    </section>
  );
};

export default Timer;
