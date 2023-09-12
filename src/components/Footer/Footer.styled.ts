import styled from 'styled-components'

export const FooterContainer = styled.footer`
    margin: 0 auto;
    padding-bottom: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 40px 24px 0;
    max-width: ${({ theme }) => theme.breakpoint.md};
  	@media(max-width: ${({ theme }) => theme.breakpoint.sm}){ 
      grid-template-columns: repeat(1, auto);
      grid-template-rows: repeat(2, auto);
     }
    .footer-child-one {
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
      .climate-data{
        display: flex;
        align-items: center;
      }
      .climate-data-one{
        padding-right: 10px;
      }
      @media(max-width: ${({ theme }) => theme.breakpoint.sm}){ 
        h1 {
          font-size: 2em;
        }
     }
    }
    .footer-child-two {
      margin: 40px 0;
    }

    .feedback-input {
      color: white;
      font-weight: 500;
      font-size: 18px;
      border-radius: 5px;
      line-height: 22px;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
      transition: all 0.3s;
      padding: 13px;
      margin-bottom: 15px;
      width: 100%;
      box-sizing: border-box;
      outline: 0;
    }

    .feedback-input:focus {
      border: 2px solid ${({ theme }) => theme.palette.red};
    }

    textarea {
      height: 150px;
      line-height: 150%;
      resize: vertical;
    }

    [type="submit"] {
      width: 100%;
      background: ${({ theme }) => theme.palette.primary.main};
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      color: white;
      font-size: 24px;
      padding-top: 10px;
      padding-bottom: 10px;
      transition: all 0.3s;
      margin-top: -4px;
      font-weight: 700;
    }
    [type="submit"]:hover {
      background: "rgb(33, 99, 151, .6)";
    }
`

