import Header from "./Components/Header/Header";
import Timer from "./Components/Timer/Timer";
import TodoList from "./Components/TodoList/TodoList";

import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Timer />
      <TodoList />
    </Fragment>
  );
}

export default App;
