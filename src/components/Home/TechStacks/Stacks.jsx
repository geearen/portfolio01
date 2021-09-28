import React from 'react'
import { TechStackData } from '../../data/TechStackData'

export default function Stacks() {
  return (
    <>
    {TechStackData.map((item,index) =>{
      return(
        <div key={index} className="container" >
          <img src={item.src} alt={item.alt} />
          <span>{item.span}</span>
        </div>
      )
    })} 
    </>
  )
}
