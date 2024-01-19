"use client"
import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

export const CountProvider = ({ children }) => {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   };

   return (
      <CountContext.Provider value={{ count, increment }}>
         {children}
      </CountContext.Provider>
   );
};

export const useCount = () => {
   return useContext(CountContext);
};
