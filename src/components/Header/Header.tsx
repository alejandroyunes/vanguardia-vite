import logo from "../../logo2.svg"
import { HeaderContainer, Logo, NavContainer, NavItems, HamburgerMenu } from "./header.styled"
import ColorSwitcher from "../ThemeSwitcher/colorSwitcher"
import { useLocation, useNavigate, Outlet, ScrollRestoration, Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {

  let navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location

  const [isActive, setIsActive] = useState(false);

  const links = [
    { text: 'Inicio', path: '/' },
    { text: 'Sobre mi', path: '/sobre-mi' },
    { text: 'Servicios', path: '/servicios' },
    { text: 'Portafolio', path: '/portafolio' },
    { text: 'Blog', path: '/blog' },
  ];

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
          <ColorSwitcher />
          <NavItems>
            <ul>
              {links.map((link) => (
                <li
                  key={link.path}
                  onClick={() => handleClick(link.path)}
                  className={pathname === link.path ? 'active' : ''}
                >
                  {link.text}
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
                // defaultChecked={isActive}
                onChange={() => setIsActive(!isActive)}
              />
              <span></span>
              <span></span>
              <span></span>
              <ul id="menu">
                {links.map((link) => (
                  <li key={link.path} onClick={() => handleClick(link.path, true)}>
                    {link.text}
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