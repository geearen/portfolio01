import React from "react";
import { ProjectData } from "../../data/ProjectData";

export default function Projects() {
  return (
    <>
      {ProjectData.map((item, index) => {
        return (
          <div key={index} className="container">
            <div className={`${item.className} project-container`}>
              <div className="meta-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.tech}</p>
                
                  <a
                    href={item.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span data-uk-icon="icon: link"></span>
                    Live Demo
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span data-uk-icon="icon: github"></span>
                    GitHub
                  </a>
                
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
