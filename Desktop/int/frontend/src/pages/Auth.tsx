import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin 
        ? <Login setIsLogin={setIsLogin} /> 
        : <Signup setIsLogin={setIsLogin} />
      }
    </>
  );
}

export default Auth;