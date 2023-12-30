import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
   const [data, setData] = useState('');

   const updateData = (newData) => {
      setData(newData);
   };

   return (
      <MyContext.Provider value={{ data, updateData }}>
         {children}
      </MyContext.Provider>
   );
};

export const useMyContext = () => useContext(MyContext);