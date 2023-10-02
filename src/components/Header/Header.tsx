import { useState } from "react"
import { useLocation, useNavigate, Outlet, ScrollRestoration, Link } from "react-router-dom"
import logo from "./vanguardia-logo.svg"
import { HeaderContainer, Logo, NavContainer, NavItems, HamburgerMenu } from "./header.styled"
import ColorSwitcher from "../ThemeSwitcher/colorSwitcher"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"

interface LinkItemProps {
  links: {
    link: string;
    path: string;
  }[]
}

export default function Header({ links } : LinkItemProps) {

  let navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const [isActive, setIsActive] = useState(false)

  const handleClick = (path: string, isMobile?: boolean) => {
    if (isMobile) {
      setIsActive(false)
    }
    navigate(path)
  }

  return (
    <>
      <HeaderContainer>
        <Logo className="nav-logo">
          <Link to='/'>
          <img src={logo} alt="Alejandro Web Logo" />
          </Link>
        </Logo>
        <NavContainer>
          <LanguageSwitcher />
          <ColorSwitcher />
          <NavItems>
            <ul>
              {links.map((link) => (
                <li
                  key={link.path}
                  onClick={() => handleClick(link.path)}
                  className={pathname === link.path ? 'active' : ''}
                >
                  {link.link}
                </li>
              ))}
            </ul>
            <ScrollRestoration />
          </NavItems>
          <HamburgerMenu>
            <div id="toggleMenu">
              <input
                type="checkbox"
                checked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                {links.map((link) => (
                  <li key={link.path} onClick={() => handleClick(link.path, true)}>
                    {link.link}
                  </li>
                ))}
              </ul>
            </div>
          </HamburgerMenu>
        </NavContainer>
      </HeaderContainer >
      <Outlet />
    </>
  )
}