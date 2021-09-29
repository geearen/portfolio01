import React from 'react'
import { ProjectData } from '../../data/ProjectData'

export default function Projects() {
  return (
    <>
      {ProjectData.map((item,index) =>{
        return (
          <div key={index} className="container">
            <div className="project-container">
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <div>
                <a
                  href={item.deployed}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site
                </a>
                <a href={item.github} 
                target="_blank" 
                rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}
