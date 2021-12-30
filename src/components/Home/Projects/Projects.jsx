import React from "react";
import * as FaIcons from "react-icons/fa"
import { ProjectData } from "../../data/ProjectData";

export default function Projects() {
  return (
    <>
      {ProjectData.map((item, index) => {
        return (
          <div key={index}>
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
                  <FaIcons.FaLink />
                  Live Demo
                </a>
                <a href={item.github} target="_blank" rel="noopener noreferrer">
                  <FaIcons.FaGithubAlt />
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
