"use client"
import React from 'react';
import { useCount } from './CountContext';

const ButtonComponent = () => {
   const { increment } = useCount();

   const handleClick = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
      increment();
   };
   return (
      <button onClick={handleClick}>
         Increment Count
      </button>
   );
};

export default ButtonComponent;
