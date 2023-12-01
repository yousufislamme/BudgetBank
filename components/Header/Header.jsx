'use client'
import { useState } from "react";
import DropDownProfile from "../DropDownProfile/DropDownProfile";
import Login from "../Home/Login";


const Header = () => { 
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  

 
  return (
     <div className='px-5 py-2 m-2 bg-emerald-400 myRounded'>
        <div className="flex justify-between items-center">
           <h1 className="myFontStyle">Budget Bank </h1>
         
         {/* DropDown Profile Button component */}
           {isLoggedIn ? (
               <DropDownProfile /> 
               ) : (
               <Login />
               )
           }
              
           </div>
        </div> 
  )
}

export default Header;