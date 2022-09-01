import "./App.css";
import React, { useState } from "react";
import Start from "./components/Start";
import Pyramid from "./components/Pyramid";
import Main from "./components/Main";

function App() {
  const [username, setUsername] = useState(null);
  const [stop, setStop] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  return (
    <div className="app">
      {username ? (
        <>
          <Main
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setEarned={setEarned}
            earned={earned}
            setStop={setStop}
            stop={stop}
          />

          <Pyramid
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setEarned={setEarned}
            earned={earned}
            setStop={setStop}
          />
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
