import React from "react";
import * as FaIcons from "react-icons/fa";
import { ProjectData } from "../../data/ProjectData";

export default function Projects() {
  return (
    <section className="projects-container">
      {ProjectData.map((item, index) => {
        return (
          <div key={index}>
            <div className={`${item.className} project-sub-container`}>
              <div className="meta-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h5>Tech Stack</h5>
                <p>{item.tech}</p>

                <div className="project-link-container">
                  <a
                    href={item.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaIcons.FaLink className="project-icon" />
                    Live Demo
                  </a>
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaIcons.FaGithubAlt className="project-icon" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
