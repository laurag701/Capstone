import "./ProjectCard.css";
import React from 'react'
import ProjectCard from "./ProjectCard";
import CardData from "./CardData";

const ProjectWork = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Project Heading</h1>
        <div className="project-container">
            {CardData.map((val, ind) => {
                return(
                    <ProjectCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default ProjectWork;