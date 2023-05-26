import React from "react";
import { restart } from "../../Redux/typingSpeedSlice";
import { useDispatch } from "react-redux";

function RestartButton() {
    const dispatch = useDispatch()
  return (
    <>
      <div className="col-4 offset-4">
        <button
          className="w-100 btn btn-secondary mt-4"
          onClick={() => dispatch(restart())}
        >
          restart
        </button>
      </div>
    </>
  );
}

export default RestartButton;
