import React from 'react'
import Mac from "./pic/Apple-Requirments/Designes/promo_macbookair__fywl7i82fueu_small.png"
import LogoMac from "./pic/Apple-Requirments/Designes/logo_promo_macbookair__hy9ktdqqtv2a_large_2x.png"
import Promo from "./pic/Apple-Requirments/Designes/promo_mbp13__buwssod6c8vm_small.jpg"
import LogoPromo from "./pic/Apple-Requirments/Designes/logo_promo_mbp13__gnmug5nsag66_large_2x.png"

function Section6() {
  return (
    <section className="fourth">
        <div className="left-side">
            <div className="top-logo">
    
                <div className="logo">
                    <img src={Mac} />
                </div>
            </div>
        </div>
            <h2 className="heading">MacBook Air</h2>
            <div className="description">
              <img src={LogoMac} alt="" width="170" height="40"/>
            </div>

            <div className="links">
                
                    <a href="">Learn more </a>
                  <a href="">Buy </a>
            </div>

        <div className="right-side">
          <div className="top">
            <div className="logo">
              <img src={Promo} />
            </div>
            </div>
          <h2 className="heading1">MacBook Pro 13"</h2>
          <div className="script">
            <img src={LogoPromo} alt="" width="200" height="60"/>
          </div>
          <div className="links">
              <a href="">Learn more </a> 
              <a href="">Buy </a> 
          </div>
          </div>	
      </section>
  )
}

export default Section6