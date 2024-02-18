"use client";
import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="myRounded m-2 bg-emerald-400 px-5 py-2">
      <div className="flex items-center justify-between">
        <h1 className="myFontStyle">Budget Bank </h1>

        {/* DropDown Profile Button component */}
        <div onClick={handleClick}>
          {isLoggedIn ? <p>Profile</p> : <p>Login</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
