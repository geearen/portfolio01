import React from 'react'
import { TechStackData } from '../../data/TechStackData'

export default function Stacks() {
  return (
    <>
    {TechStackData.map((item,index) =>{
      return (
        <div key={index} className="tech-container">
          <div data-uk-tooltip={item.span}>
            <img className="tech-stack-img" src={item.src} alt={item.alt} />
          </div>
        </div>
      );
    })} 
    </>
  )
}
