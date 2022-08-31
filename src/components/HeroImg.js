import "./HeroImg.css";
import herojs from "../assets/herojs.webp";
import React from 'react'
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="hero-img" src={herojs} alt="HeroImg" />
        </div>
        <div className="content">
            <p>Hello, My name is Laura Gonzalez</p>
            <h1>Welcome to my Portfolio</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/about" className="btn">About</Link>
                <Link to="/Contact" className="btn">Contact</Link>
            </div>
        </div>
    </div>
  )
}
export default HeroImg;