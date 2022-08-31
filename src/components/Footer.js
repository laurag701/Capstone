import "./Footer.css";
import { Link } from "react-router-dom";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div class="social">
            <a href="https://www.instagram.com/laurraaag/"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/laura-gonzalez701/"><i class="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/?lang=en"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/laurag701"><i class="fab fa-github"></i></a>
        </div>

        <ul class="list">
        <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        <p class="copyright">
            Copyright @ Laura Gonzalez
        </p>
    </div>
  )
}

export default Footer;