import React from "react";
import Timer from "./Timer";
import Trivia from "./Trivia";
import { data } from "./Data.jsx";
import "./styles/main.css";

function Main({
  questionNumber,
  setQuestionNumber,
  setEarned,
  earned,
  setStop,
  stop,
}) {
  return (
    <>
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned} </h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">
                <Timer setStop={setStop} questionNumber={questionNumber} />
              </div>
            </div>

            <div className="bottom">
              <Trivia
                data={data}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setStop={setStop}
                setEarned={setEarned}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Main;
