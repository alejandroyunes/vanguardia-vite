import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 60px 24px 40px;
  max-width: ${({ theme }) => theme.breakpoint.md};
  gap: 10px;
  @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(2, auto);
    }
  .footer-left {
    h1 {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.primary.main};
      font-size: 3.8em;
      line-height: 1.2;
    }
    h2 {
      color: ${({ theme }) => theme.palette.primary.contrastText};
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2rem;
      padding: 8px 0;
      font-weight: 400;
    }
    h3 {
      color: ${({ theme }) => theme.palette.red};
      font-size: 1.2rem;
      line-height: 2rem;
      padding: 0 0 8px 0;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
      h1 {
        font-size: 2em;
      }
    }
  }
  .footer-right {
    margin: auto 0;

    .footer__icon {
      color: white;
      display: flex;
      padding: 8px 0;
      p {
        padding-left: 16px;
        color: ${({ theme }) => theme.palette.primary.contrastText};
      }
      p:hover {
        color: ${({ theme }) => theme.palette.primary.main};
        cursor: pointer;
      }
    }
    .footer__social {
      color: white;
      display: flex;
      padding: 8px 0;

      .visually-hidden {
      position: absolute;
      left: -9999px;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap; /* Added for extra safety */
    }
      :nth-child(1) {
        margin-right: 16px;
      }
      :nth-child(2) {
        margin-right: 16px;
      }
      :nth-child(3) {
        margin-right: 16px;
      }
      :hover {
        color: ${({ theme }) => theme.palette.primary.main};
        cursor: pointer;
      }
    }
  }
`

