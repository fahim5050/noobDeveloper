
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      
      img: "/projects/1.png",
      title: "Project 1",
     },
    {
      title: "Project 2",
      img: "/projects/2.png",
      },
    {
      title: "Project 3",
      img: "/projects/3.png",
    },
    {
      title: "Project 4",
      img: "/projects/4.png",
     },
    {
      title: "Project 5",
      img: "/projects/5.png",
     },
    {
      title: "Project 6",
      img: "/projects/6.png",
      },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a href="#project" className="btn">View All</a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
           
              <div className="img-container">
                <img src={project.img} alt={project.title} />
               
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                
              </div>
            
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati.
              </p>
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
