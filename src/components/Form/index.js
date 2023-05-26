import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setIndex,
  addTrue,
  setProcess,
  addFalse,
  start,
  finish,
} from "../../Redux/typingSpeedSlice";
import Timer from "../Timer";

function Form() {
  const { data, lang, index, isStart } = useSelector(
    (state) => state.typingSpeed
  );
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const match = (e) => {
    e.preventDefault();
    if (data[index][lang] === input) {
      dispatch(setIndex());
      setInput("");
      dispatch(setProcess({ process: "dogru", index }));
      dispatch(addTrue());
    } else {
      dispatch(setIndex());
      setInput("");
      dispatch(setProcess({ process: "yanlis", index }));
      dispatch(addFalse());
    }
  };

  const changeInput = (e) => {
    setInput(e.target.value);
    if (!isStart) {
      dispatch(start());
    }
  };
  
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

  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={match}>
            <input
              className="w-100"
              value={input}
              onChange={(e) => changeInput(e)}
            ></input>
          </form>
        </div>
        <Timer />
      </div>
    </>
  );
}

export default Form;
