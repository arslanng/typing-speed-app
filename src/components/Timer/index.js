import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime } from "../../Redux/typingSpeedSlice";

function Timer() {
  const { time, isStart, isFinish } = useSelector((state) => state.typingSpeed);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isStart && !isFinish) {
      const interval = setInterval(() => {
        dispatch(setTime());
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isStart, isFinish, dispatch]);

  return (
    <>
      <div className="row">
        <div className="col-4 offset-4 text-center mt-3">
          <h1>{time}</h1>
        </div>
      </div>
    </>
  );
}

export default Timer;
