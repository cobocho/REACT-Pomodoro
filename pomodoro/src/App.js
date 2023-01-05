import Header from "./Components/Header/Header";
import Timer from "./Components/Timer/Timer";
import TimerController from "./Components/TimerController.js/TimerController";
import TodoList from "./Components/TodoList/TodoList";
import store from "./store/index";
import TodoEditor from "./Components/Todo/TodoEditor";

import { Provider, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const modalCloseHandler = () => {
    setModalVisible(false);
  };

  const modalOpenHandler = () => {
    setModalVisible(true);
  };

  return (
    <Provider store={store}>
      {modalVisible && <TodoEditor onClose={modalCloseHandler} />}
      <Header />
      <Timer />
      <TimerController />
      <TodoList onModalOpen={modalOpenHandler} />
    </Provider>
  );
}

export default App;
