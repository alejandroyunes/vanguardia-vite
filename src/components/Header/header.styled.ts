import styled from 'styled-components'

export const HeaderContainer = styled.header`
position: sticky;
top: 0px;
height: 50px;
display: flex;
justify-content: space-between;
background: white;
z-index: 10;
@media(max-width: ${({theme}) => theme.breakpoint.xs}){
  height: 42px;
}
`

export const Logo = styled.div`
  margin: 0 24px;
  width: 45px;
  padding-top: 2px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  @media(max-width: ${({theme}) => theme.breakpoint.xs}){
    width: 38px;
    padding-top: 4px;
}
`

export const NavContainer = styled.div`
  display: flex;
`

export const NavItems = styled.div`
  display: block;
  @media(max-width: ${({theme}) => theme.breakpoint.xs}){
    display: none;
  }
  ul {
    display: inline-flex;
    list-style-type: none;
    height: 48px;
    align-items: center;
  }
  li {
    position: relative;
    cursor: pointer;
    margin-right: 16px;
    padding: 0 8px;
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: 400;
  }
  li:hover::before {
    content: "[";
    color: ${({ theme }) => theme.palette.primary.main};
    animation: left-bracket;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    position: absolute;
    animation-fill-mode: forwards;
  }
  li:hover::after {
    content: "]";
    color: ${({ theme }) => theme.palette.primary.main};
    animation: right-bracket;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    position: absolute;
    animation-fill-mode: forwards;
  }
  li.active::before {
    content: "[";
    color: ${({ theme }) => theme.palette.primary.main};
    animation: left-bracket;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    position: absolute;
    animation-fill-mode: forwards;
  }
  li.active::after {
    content: "]";
    color: ${({ theme }) => theme.palette.primary.main};
    animation: right-bracket;
    animation-duration: 0.5s;
    animation-timing-function: ease-out;
    position: absolute;
    animation-fill-mode: forwards;
  }
  @keyframes left-bracket {
    0% {
      left: -4px;
      opacity: 0;
      transform: rotate(90deg);
    }

    100% {
      left: -4px;
      opacity: 1;
      transform: rotate(0deg);
    }
  }
  @keyframes right-bracket {
    from {
      right: -4px;
      opacity: 0;
      transform: rotate(-90deg);
    }

    to {
      right: -4px;
      opacity: 1;
      transform: rotate(0deg);
    }
  }
`

export const HamburgerMenu = styled.div`
  display: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  margin-top: 13px;
  @media(max-width: 756px){
    display: block;
  }
  #toggleMenu {
    top: 16px;
    right: 0px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  #toggleMenu a {
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.main};
    transition: color 0.3s ease;
  }

  #toggleMenu a:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  #toggleMenu input {
    display: block;
    width: 44px;
    height: 36px;
    position: absolute;
    top: -7px;
    right: 14px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  #toggleMenu span {
    display: block;
    width: 33px;
    height: 4px;
    right: 20px;
    margin-bottom: 5px;
    position: relative;
    background: ${({ theme }) => theme.palette.primary.main};
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      opacity 0.55s ease;
  }

  #toggleMenu span:first-child {
    transform-origin: 0% 0%;
  }

  #toggleMenu span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  #toggleMenu input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(6px, -5px);
    background: ${({ theme }) => theme.palette.primary.main};
  }

  #toggleMenu input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  #toggleMenu input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(4px, 7px);
  }

  #menu {
    position: absolute;
    width: 200px;
    margin: -100px 0 0 -50px;
    padding-top: 100px;
    right: 0px;
    background: white;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    transform-origin: 10px;
    transform: translate(0, -100%);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 10px;
    font-size: 18px;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  
  #menu li:hover {
    background: lightgray;
    cursor: pointer;
  }

  #toggleMenu input:checked~ul {
    transform: none;
  }
`