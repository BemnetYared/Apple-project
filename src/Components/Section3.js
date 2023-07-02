import React from 'react'
import Down from "./pic/download (1) - Copy.jpg"

function Section3() {
  return (
    <section className="Pro">
        <h1>iPhone 13 Pro</h1>
        <div className="par">
          <p>Oh.So.Pro</p>
        </div>
        <div className="learn">
          <a href="#" className="learn">Learn more</a>
          <a href="#" className="learn">Buy</a>
        </div>
        <div className="image2">
        <img src={Down} alt="" />
        </div> 
    </section>
  )
}

export default Section3