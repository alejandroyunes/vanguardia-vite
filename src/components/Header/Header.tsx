import { useState, useEffect } from "react"
import logo from "../../logo2.svg"
import './header.scss'

export default function Header() {
  const [header, setHeader] = useState("main-nav");

  return (
    <header className='nav'>
      <div className="nav-logo">
        <img src={logo} alt="Alejandro Web Logo" />
      </div>
      <div className="nav-container">
        <div className="theme-switch">
          <div className="toggle-input">
            <input
              type="checkbox"
              defaultChecked={true}
              id="toggler"
              onChange={() => console.log('clicked')}
            />
            <label htmlFor="toggler" className="toggle">
              <span className="star star1"></span>
              <span className="star star2"></span>
              <span className="star star3"></span>
              <span className="star star4"></span>
              <span className="star star5"></span>
              <span className="star star6"></span>
              <span className="handler">
                <span className="crater crater1"></span>
                <span className="crater crater2"></span>
                <span className="crater crater3"></span>
              </span>
            </label>
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li>about</li>
            <li>about</li>
            <li>about</li>
            <li>about</li>
          </ul>
        </div>
        <div className="hamburger-menu">
          <div id="toggleMenu" >
            <input
              type="checkbox"
              // defaultChecked={isMenuOpen}
              // checked={isMenuOpen}
              // onClick={() => toggleDropdown()}
            />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>hello</li>
              <li>world</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}