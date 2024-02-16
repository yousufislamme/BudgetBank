import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useMyDataContext = () => useContext(DataContext); // create a global state
export const MyDataContext = ({ children }) => { // provider
   const [values, setValues] = useState([]);


   // handler
   const addValue = (value) => {
      setValues(prevValue => [...prevValue, value]);
   }

   return (
      <MyDataContext.Provider value={{ values, addValue }}>
         {children}
      </MyDataContext.Provider>
   );
}
