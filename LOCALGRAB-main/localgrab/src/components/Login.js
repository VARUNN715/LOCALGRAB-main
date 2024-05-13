import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <div className="vendor">
            <a href="../../vendor/vendor.html">Click here</a>
          </div>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : (
        <div  style={{display: "flex", justifyContent: "center", marginTop: "210px", height: "50px", fontSize: "30px"}}>
            <button onClick={() => loginWithRedirect()}>LOGIN / SIGNUP</button>
        </div>
      )}
    </div>
  );
};

export default Login;
