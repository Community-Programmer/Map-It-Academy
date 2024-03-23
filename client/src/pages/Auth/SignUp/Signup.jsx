import React, { useState } from "react";
import Logo from '../../../assets/logo.png';
import "../Auth.scss";
import { signupUser } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

const Signup = () => {

  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpass: "",
    
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(signupData.password !== signupData.confirmpass){
      alert("Password didn't match")
        return;
    }
    dispatch(signupUser(signupData));
  }


  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
      </div>

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>Sign up</h3>

          <div>
            <input
              type="text"
              placeholder="First Name"
              className="infoInput"
              name="firstname"
              value={signupData.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="infoInput"
              name="lastname"
              value={signupData.lastname}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="email"
              className="infoInput"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              className="infoInput"
              name="confirmpass"
              placeholder="Confirm Password"
              value={signupData.confirmpass}
              onChange={handleChange}
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
