"use client";
import { useMyContext } from "@/context/MyContextTest";
// InputComponent.js
import { useState } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const { addValue } = useMyContext();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    addValue(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Value</button>
    </div>
  );
};

export default InputComponent;
