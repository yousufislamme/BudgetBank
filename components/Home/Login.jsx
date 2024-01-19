import app from "@/Firebase/Firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useState } from "react";


const Login = () => {
  const [userData, setUserData] = useState(null); 


  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  // handler login
  const handleLoginButton = async () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUserData(user);
        console.log('user :', user);
      })
      .catch(error => {
        console.log('error :', error.massage);
        
      })
    
  }


  return (
    <div>
      {userData && (
        <div>
          <h2>Profile Name: {userData?.displayName}</h2>
        <p>Email: {userData?.email}</p>
        {/* <img src={userData.photoURL} alt="Yousuf" /> */}
        </div>
  )      

      }   <button
        type="submit"
        onClick={handleLoginButton} 
      >
        SingUp
      </button>  
     
    </div>
  );
}

export default Login;