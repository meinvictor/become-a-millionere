import { useRef } from "react";
import "./styles/start.css";

function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <div className="start">
      <h1 className="logo">
        Who Wants to Be a <span>Million</span>aire?
      </h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        required
        className="startInput"
        ref={inputRef}
      />{" "}
      <br />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
}

export default Start;
