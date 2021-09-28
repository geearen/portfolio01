import React from 'react'
import { ProjectData } from '../../data/ProjectData'

export default function Projects() {
  return (
    <>
      {ProjectData.map((item,index) =>{
        return(
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>

            <div>
              <a href={item.deployed}>
                View Site
              </a>
              <a href={item.github}>
                GitHub
              </a>
            </div>
          </div>
        )
      })}
    </>
  )
}
