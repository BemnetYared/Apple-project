import React from 'react'
import AppleLogo from "./pic/icons/logo.png";
import SearchLogo from "./pic/icons/search-icon.png";
import CartLogo from "./pic/icons/cart.png";
function Header() {
  return (
    <header className="header">
    <div className="internal">
        <div className="link">
        <nav>
            <ul>
                <li className="home"><a href=""><img src= {AppleLogo} alt="Apple-logo"/></a></li>
                <li><a href="https://www.apple.com/us/shop/goto/store">Store</a></li>
                <li><a href="https://www.apple.com/mac/">Mac</a></li>
                <li><a href="https://www.apple.com/ipad/">iPad</a></li>
                <li><a href="https://www.apple.com/iphone/">iPhone</a></li>
                <li><a href="https://www.apple.com/watch/">Watch</a></li>
                <li><a href="https://www.apple.com/airpods/">AirPods</a></li>
                <li><a href="https://www.apple.com/tv-home/">TV & Home</a></li>
                <li><a href="https://www.apple.com/services/">Only on Apple</a></li>
                <li><a href="https://www.apple.com/us/shop/goto/buy_accessories">Accessories</a></li>
                <li><a href="https://support.apple.com/">Support</a></li>
                <li><a href="search"><img src= {SearchLogo} alt="search-icon"/></a></li>
                <li><a href="cart"><img src={CartLogo} alt="cart"/></a></li>
            </ul>
        </nav>
        </div>
    </div>
</header>
  )
}

export default Header;
