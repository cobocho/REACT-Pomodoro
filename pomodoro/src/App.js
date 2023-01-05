import Header from "./Components/Header/Header";
import Timer from "./Components/Timer/Timer";
import TodoList from "./Components/TodoList/TodoList";
import store from "./store/store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Timer />
      <TodoList />
    </Provider>
  );
}

export default App;
