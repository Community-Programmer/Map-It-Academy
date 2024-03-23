import React from "react";
import "./Frontpage.scss";
import Frontpage_img from "../../assets/Frontpage_img.png";

const Frontpage = () => {
  return (
    <div className="Frontpage">
      <div>
        <div className="Tagline">Great courses for great learners</div>
        <span className="subline">
          Every learner deserves to learn with quality courses.
        </span>
      </div>
      <div>
        <img src={Frontpage_img} alt="" className="Frontpage_img" />
      </div>
    </div>
  );
};

export default Frontpage;
