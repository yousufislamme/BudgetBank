import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  const [values, setValues] = useState([]);
  const [commits, setCommits] = useState([]);

  const addValue = (value) => {
    setValues((prevValues) => [...prevValues, value]);
  };
  const addCommit = (commit) => {
    setCommits((prevCommit) => [...prevCommit, commit]);
  };

  return (
    <MyContext.Provider value={{ values, addValue, commits, addCommit }}>
      {children}
    </MyContext.Provider>
  );
};
