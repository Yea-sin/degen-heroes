import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-img">
          <img src="https://i.ibb.co/yY0ySgc/hero-img.png" alt="" />
        </div>
        <p className="hero-text">Minting soon.. The fog is lifting in:</p>
        <div className="hero-counter">
          <div className="days col">
            <h2>0</h2>
            <p>DAYS</p>{" "}
          </div>
          <div className="hours col">
            <h2>0</h2>
            <p>HOURS</p>
          </div>
          <div className="mins col">
            <h2>0</h2>
            <p>MINS</p>
          </div>
          <div className="secs col">
            <h2>0</h2>
            <p>SECS</p>
          </div>
        </div>
        <button className="btn">
          <div className="btn-style">Opensa</div>
        </button>
      </div>
    </>
  );
};

export default Hero;
