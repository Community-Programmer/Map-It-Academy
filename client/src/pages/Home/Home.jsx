import React from "react";
import "./Home.scss";
import Frontpage from "../../components/Frontpage/Frontpage";
import Introduction from "../../components/Introduction/Introduction";
import Courses from "../Courses/Courses";

const Home = () => {
  return (
    <div className="Home">
      <Frontpage />
      <Introduction />
      <Courses />
    </div>
  );
};

export default Home;
