import React, { useMemo, useEffect } from "react";
import "./styles/pyramid.css";

function Pyramid({ questionNumber, setQuestionNumber, setEarned, earned }) {
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 400" },
        { id: 5, amount: "$ 500" },
        { id: 6, amount: "$ 1000" },
        { id: 7, amount: "$ 2000" },
        { id: 8, amount: "$ 4000" },
        { id: 9, amount: "$ 8000" },
        { id: 10, amount: "$ 16000" },
        { id: 11, amount: "$ 32000" },
        { id: 12, amount: "$ 64000" },
        { id: 13, amount: "$ 128000" },
        { id: 14, amount: "$ 250000" },
        { id: 15, amount: "$ 1000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              key={m.id}
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Pyramid;
