import React from 'react'
import Watch from "./pic/Apple-Requirments/Designes/promo_watch_lte__djeaso7ukrsm_medium.jpg"
import LogoWatch from "./pic/Apple-Requirments/Designes/promo_logo_watch_lte__emrof7zzkriq_large_2x.png"
import Ipad from "./pic/Apple-Requirments/Designes/promo_ipadair_avail__ferd4bfpcdm6_small.jpg"
import LogoIpad from "./pic/Apple-Requirments/Designes/promo_logo_ipadair__frwnnsqveeye_large_2x.png"


function Section5() {
  return (
    <section class="fourth">
    <div class="left-side">
        <div class="top-logo">

            <div class="logo">
                <img src={Watch} width="800"  height="510"/>
            </div>
        </div>
        <div class="icon">
          <img src={LogoWatch} alt="" width="140"  height="60"/>
        </div>
        <div class="discript">
          <h3>It's our largest display yet.</h3>
        </div>
        <div class="linked">
            
                <a href="">Learn more </a>
              <a href="">Buy </a>
        </div>
    </div>

    <div class="right-side">
      <div class="top-logo">
        <div class="logo">
          <img src={Ipad} alt="" width="800"  height="510"/>
        </div>
      </div>
      <div class="icon">
        <img src={LogoIpad} alt=""  height="60" width="140"/>
      </div>
      <div class="discripts">
      <h3>Light.Bright.Full of might.</h3>
      </div>
      <div class="linked">
          <a href="">Learn more </a> 
          <a href="">Buy </a> 
      </div>	
    </div>
  </section>
  )
}

export default Section5