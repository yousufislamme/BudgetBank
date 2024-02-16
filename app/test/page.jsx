"use client";
import { useState } from "react";

const Test = () => {
  const [strings, setStrings] = useState([]);
  const [currentString, setCurrentString] = useState("");

  const handleButtonClick = () => {
    setStrings((prevStrings) => [...prevStrings, currentString]); //copy & update value
    setCurrentString(""); // clear input
  };

  const handleInputChange = (event) => {
    setCurrentString(event.target.value);
  };

  return (
    <div>
      <input type="text" value={currentString} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add String</button>
      <ul>
        {strings.map((str, index) => (
          <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
