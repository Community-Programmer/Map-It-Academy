import React, { useEffect } from "react";
import "../Auth.scss";
import Logo from "../../../assets/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(loginUser(loginData));
  }

  const auth = useSelector((state) => state.auth.isLogin);

  useEffect(()=>{
    if(auth){
        navigate('/courses');
    }

  },[auth,navigate])

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
      </div>
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>Log In</h3>

          <div>
            <input
              type="email"
              placeholder="Email"
              className="infoInput"
              name="email"
              value={loginData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
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
