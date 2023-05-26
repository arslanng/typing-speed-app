import React from "react";
import { useSelector } from "react-redux";

function Context() {
  const { lang, data, index, fontSize } = useSelector(
    (state) => state.typingSpeed
  );
  
  return (
    <>
      <div className="container">
        <div className="row">
          <p className="lh-lg">
            {data.map((word, i) => (
              <span
                className={
                  i === index && word.process !== "olmadi"
                    ? "bg-primary p-2"
                    : word.process === "dogru"
                    ? "bg-success p-2"
                    : word.process === "yanlis"
                    ? "bg-danger p-2"
                    : word.process === "olmadi"
                    ? "text-decoration-line-through p-2"
                    : "p-2"
                }
                key={i}
              >
                <span
                  className={
                    fontSize === "small"
                      ? "fs-6"
                      : fontSize === "medium"
                      ? "fs-4"
                      : "fs-3"
                  }
                >
                  {word[lang]}{" "}
                </span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
}

export default Context;
