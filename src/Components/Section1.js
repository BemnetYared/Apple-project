import React from 'react'
import Unicef from "./pic/Apple-Requirments/Designes/unicef_logo_dark__ejvlglygb3ee_large_2x.png";

function Section1() {
  return (
    <section class="unicef">
        <div class="unicefs">
            <ul>
                <li><img src={Unicef} alt="unicef"/></li>
                <li><a href="#" class="help">Donate to support families affected by the war in Ukraine./</a></li>
            </ul>
        </div>
    </section>
  )
}

export default Section1