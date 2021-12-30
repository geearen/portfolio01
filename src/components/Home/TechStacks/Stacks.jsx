import React,{ useState } from 'react'
import ReactTooltip from 'react-tooltip'
import { TechStackData } from '../../data/TechStackData'

export default function Stacks() {
  return (
    <>
    {TechStackData.map((item,index) =>{
      return (
        <div key={index} className="tech-container">
          <img
            data-tip
            data-for={item.alt}
            className="tech-stack-img"
            src={item.src}
            alt={item.alt}
          />
          <ReactTooltip
            id={item.alt}
            place="top"
            effect="solid"
            backgroundColor="#344E41"
          >
            {item.span}
          </ReactTooltip>
        </div>
      );
    })} 
    </>
  )
}
