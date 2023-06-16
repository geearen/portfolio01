import React, { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { TechStackData } from "../../data/TechStackData";

export default function Stacks() {
  return (
    <section className="tech-stack-section">
      {TechStackData.map((item, index) => {
        return (
          <div key={index} className="tech-container">
            <img
              data-tooltip-id={item.alt}
              data-tooltip-content={item.span}
              className="tech-stack-img"
              src={item.src}
              alt={item.alt}
            />
            <ReactTooltip
              id={item.alt}
              place="top"
              effect="solid"
              style={{ backgroundColor: "#B29960" }}
            />
          </div>
        );
      })}
    </section>
  );
}
