import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const GoogleSignIn = () => {
  const [userG, setUserG] = useState({});
  const{ setUser, user} = useContext(AuthContext);
  console.log(userG);

  const handleCallbackResponse = (response) => {
    const userObject = jwt_decode(response.credential);
    setUserG(userObject);
    setUser({username: userG?.name, email: userG?.email, role: "User"});
    localStorage.setItem('user', user)
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        process.env.REACT_APP_client_id,
      callback: handleCallbackResponse,
    });
     
    google.accounts.id.renderButton(
      document.getElementById("loginBtn"),
      {theme: "outline", size: "large"}
    )
  }, []);
  return (
    <div id='loginBtn'>
      
    </div>
  );
};

export default GoogleSignIn;