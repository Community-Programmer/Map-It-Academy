import React from "react";
import "./Introduction.scss";
import introduction_img from "../../assets/introduction_img.png";

const Introduction = () => {
  return (
    <div className="Introduction">
      <div>
        <img src={introduction_img} alt="" className="Frontpage_img" />
      </div>
      <div>
        <div className="Intro_Tagline">Enhance your skills and knowledge</div>
        <span className="Intro_subline">
          It's not that easy to succeed without the right skills and knowledge.
          <br></br>At mapitacademy, we offer advanced IT courses for free,
          empowering learners to excel in IT world. Start learning for free now!
        </span>
        <span className="Intro_subline"></span>
      </div>
    </div>
  );
};

export default Introduction;
