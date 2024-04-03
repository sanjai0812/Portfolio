import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bxs-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle"> Not Working</span>
      </div>

      <div className="about__box">
        <i className="bx bxl-stack-overflow about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">7+ Mini Projects</span>
      </div>

      <div className="about__box">
      <i className='bx bx-support  about__icon' ></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
