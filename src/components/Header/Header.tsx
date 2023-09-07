import logo from "../../logo2.svg"
import { HeaderContainer, Logo, NavContainer, NavItems, HamburgerMenu } from "./header.styled"
import ColorSwitcher from "../ThemeSwitcher/colorSwitcher"

export default function Header() {
  return (
    <HeaderContainer>
      <Logo className="nav-logo">
        <img src={logo} alt="Alejandro Web Logo" />
      </Logo>
      <NavContainer>
        <ColorSwitcher />
        <NavItems>
          <ul>
            <li>about</li>
            <li>about</li>
            <li>about</li>
            <li>about</li>
          </ul>
        </NavItems>
        <HamburgerMenu>
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
        </HamburgerMenu>
      </NavContainer>
    </HeaderContainer>
  )
}