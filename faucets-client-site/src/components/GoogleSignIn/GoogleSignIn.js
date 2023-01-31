import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

const GoogleSignIn = () => {
  const [userG, setUserG] = useState({});
  console.log(userG);

  const handleCallbackResponse = (response) => {
    const userObject = jwt_decode(response.credential);
    setUserG(userObject);
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