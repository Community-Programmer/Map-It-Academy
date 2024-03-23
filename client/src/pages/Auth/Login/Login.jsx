import React from "react";
import "../Auth.scss";
import Logo from '../../../assets/logo.png';

const Login = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
      </div>
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="infoInput"
              name="email"
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account Sign up
            </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
