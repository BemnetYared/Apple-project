import React from 'react'
import Super from "./pic/iPhone 13 Verde Alpino.jpg"
function Section2() {
  return (
    <section className="superpower">
        <h1>iPhone 13</h1>
        <div className="par">
          <p>Your new superpower.</p>
        </div>
        <div className="learn">
          <a href="#" className="learn">Learn more </a>
          <a href="#" className="learn">Buy </a>
        </div>
        <div class="image">
          <img src={Super} alt="" />
        </div>
      </section>
  )
}

export default Section2