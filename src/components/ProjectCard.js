import "./ProjectCard.css";
import { Link } from "react-router-dom";
import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="img" />
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="project-btns">
                        <Link to={props.views} className="btn">View Site</Link>
                        <Link to="/" className="btn">View Code</Link>
                    </div>
                </div>
            </div>
  )
}

export default ProjectCard;