import { useEffect, useRef, useState } from "react";

const DropDownProfile = () => {


    const [isOpen, setIsOpen] = useState(false); 
   // const [isLoggedIn, setIsLoggedIn] = useState();
   const dropdownRef = useRef(null);

 
   // handle profile drop down
   const handleProfileDropDown = () => {


      setIsOpen(!isOpen);
      console.log('clicked');
   }
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
     <>
     <div className="relative" ref={dropdownRef}>
                  <div  
                        onClick={handleProfileDropDown}
                        className="w-9 h-9 rounded-full bg-white cursor-pointer">
                  </div>
             {isOpen ? (
                  <div onClick={handleProfileDropDown} >
                        <div className="w-52 absolute top-10 -right-5 transition-all duration-300 ease-in-out bg-white/40 backdrop-blur-md shadow-xl myRounded px-5 py-2 m-2">
                           <p>DropDown</p>
                           <p>DropDown</p>
                           <p>DropDown</p>
                           <p>DropDown</p>
                           <p>DropDown</p>
                           <p>DropDown</p>
                        </div>
                  </div>
              ) : null}
            </div>
     </>
  )
}

export default DropDownProfile;