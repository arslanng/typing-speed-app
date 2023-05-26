import React from "react";
import { useSelector } from "react-redux";
import RestartButton from "../RestartButton";

function Score() {
  const { data, trues, falses } = useSelector((state) => state.typingSpeed);

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <h1>Finish</h1>
        </div>
        <div className="row">
          <div className="col-4 offset-4 bg-light">
            <h2>Score</h2>
            <ul>
              <li>Doğru: {trues}</li>
              <li>Yanlış: {falses}</li>
              <li>Tamamlanan: {((trues + falses) * 100) / data.length}%</li>
              <li>Doğru Tamamlanan: {(trues * 100) / data.length}%</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <RestartButton />
        </div>
      </div>
    </>
  );
}

export default Score;
