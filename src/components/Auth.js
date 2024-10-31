import React, { useContext } from "react";

import Card from "./UI/Card";

import { AuthContext } from "../context/auth-context";

import "./Auth.css";

const Auth = (props) => {
  const authContext = useContext(AuthContext);

  const loginHandler = () => {
    authContext.login();
  };

  return (
    <div className="auth">
      <Card>
        <p>Please Log in.</p>
        <button onClick={loginHandler}>Enter</button>
      </Card>
    </div>
  );
};

export default Auth;
