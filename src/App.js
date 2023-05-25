import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setProcess, finish, addTrue, addFalse } from "./Redux/typingSpeedSlice";
import { useEffect } from "react";

function App() {
  const { data, isFinish, trues, falses, } = useSelector((state) => state.typingSpeed);
  const dispatch = useDispatch();
  const [lang, setLang] = useState("turkish");
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (index === data.length) {
      dispatch(finish());
    } else {
      if (!data[index][lang].includes(input)) {
        dispatch(setProcess({ process: "olmadi", index }));
        console.log("olmadi");
      } else {
        dispatch(setProcess({ process: "none", index }));
      }
    }
  }, [input, data, index, lang, dispatch]);
  const match = (e) => {
    e.preventDefault();
    if (data[index][lang] === input) {
      setIndex(index + 1);
      setInput("");
      dispatch(setProcess({ process: "dogru", index }));
      dispatch(addTrue());
    } else {
      setIndex(index + 1);
      setInput("");
      dispatch(setProcess({ process: "yanlis", index }));
      dispatch(addFalse())
    }
  };
  if (!isFinish && data.length > index - 1) {
    return (
      <>
        <div className="text-center">
          <h1>Typing Speed App</h1>
        </div>
        <div className="container">
          <div className="row">
            <p>
              {data.map((word, i) => (
                <span
                  className={
                    i === index && word.process !== "olmadi"
                      ? "bg-primary"
                      : word.process === "dogru"
                      ? "bg-success"
                      : word.process === "yanlis"
                      ? "bg-danger"
                      : word.process === "olmadi"
                      ? "text-decoration-line-through"
                      : ""
                  }
                  key={i}
                >
                  {word[lang]}{" "}
                </span>
              ))}
            </p>
          </div>
          <div className="row">
            <form onSubmit={match}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
              ></input>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
          <div className="row text-center">
            <h1>Finish</h1>
          </div>
          <div className="row">
            <div className="col-4 offset-4 bg-light">
              <h2>
                Score
              </h2>
              <ul>
                <li>Doğru: {trues}</li>
                <li>Yanlış: {falses}</li>
                <li>Tamamlanan: {(trues+falses)*100/data.length}%</li>
                <li>Doğru Tamamlanan: {(trues*100)/data.length}%</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
