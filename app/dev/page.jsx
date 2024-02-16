"use client";
import { useState } from "react";

const Dev = () => {
  const [results, setResults] = useState([]);

  const handleCount = () => {
    const newResult =
      results.length === 0 ? 2 : results[results.length - 1] + 1;
    setResults([...results, newResult]);
  };

  return (
    <div>
      <button onClick={handleCount}>click</button>
      {results.map((result, index) => (
        <p key={index}>
          show {result} : {result}
        </p>
      ))}
    </div>
  );
};

export default Dev;
