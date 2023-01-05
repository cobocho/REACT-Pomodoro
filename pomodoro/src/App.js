import Header from "./Components/Header/Header";
import Timer from "./Components/Timer/Timer";
import TimerController from "./Components/TimerController.js/TimerController";
import TodoList from "./Components/TodoList/TodoList";
import store from "./store/index";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Timer />
      <TimerController />
      <TodoList />
    </Provider>
  );
}

export default App;
