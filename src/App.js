import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Context from "./components/Context";
import RestartButton from "./components/RestartButton";
import Form from "./components/Form";
import Score from "./components/Score";

function App() {
  const { data, isFinish, index } = useSelector(
    (state) => state.typingSpeed
  );

  if (!isFinish && data.length > index - 1) {
    return (
      <>
        <Header />
        <Context />
        <Form />
        <RestartButton />
      </>
    );
  } else {
    return (
      <Score/>
    );
  }
}

export default App;
