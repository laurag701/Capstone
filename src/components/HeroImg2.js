import "./HeroImg2.css";
import React from 'react'
import laura from "../assets/laura.jpg";

const HeroImg2 = () => {
  return (
    <div className="hero-img">
        <div className="heading">
        <section class="about">
        <div class="main">
        <img className="hero-img" src={laura} alt="img" />
            <div class="about-text">
                <h1>About Me</h1>
                <h5>Hi, My name is Laura Gonzalez</h5>
                <p>I was born and raised in Charlotte, NC, I'm currently 21 years old.  I am a soon to be Full Stack
                Software Developer who loves to learn new skills and take on challenges. </p>
            </div>
        </div>
    </section>
        </div>
    </div>
  )
}

export default HeroImg2;