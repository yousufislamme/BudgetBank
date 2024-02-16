import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [call, setCall] = useState("");

  const updateData = (newData) => {
    setData(newData);
  };
  const callTran = (newData) => {
    setCall(newData);
  };

  const myHandler = () => {
    data();
  };

  return (
    <MyContext.Provider value={{ data, call, updateData, callTran, myHandler }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
