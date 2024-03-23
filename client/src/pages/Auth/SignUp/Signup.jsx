import React from "react";
import Logo from '../../../assets/logo.png';
import "../Auth.scss";

const Signup = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
      </div>

      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign up</h3>

          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
            />
          </div>

          <div>
            <input
              type="email"
              className="infoInput"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="password"
              placeholder="Password"
            />
            <input
              type="text"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <span style={{ fontSize: "12px" }}>
              Already have an account. Login!
            </span>
          </div>
          <button className="button infoButton" type="submit">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
