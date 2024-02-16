// // MyContext.js
// import React, { createContext, useState, useContext } from 'react';

// const MyContextTest = createContext();

// export const useMyContext = () => useContext(MyContextTest); // global state

// export const MyContextProvider = ({ children }) => { //provider for wrap
//    const [values, setValues] = useState([]);

//    const addValue = (value) => { // handler
//       setValues(prevValues => [...prevValues, value]);
//    };

//    return (
//       <MyContextTest.Provider value={{ values, addValue }}>
//          {children}
//       </MyContextTest.Provider>
//    );
// };
