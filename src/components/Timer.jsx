import { useState, useEffect } from "react";

function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      return setStop(true);
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setStop, timer]);

  useEffect(() => {
    setTimer(90);
  }, [questionNumber]);

  return timer;
}

export default Timer;
