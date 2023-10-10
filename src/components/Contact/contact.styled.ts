import styled from 'styled-components'

export const ContactContainer = styled.div`
  padding: 0 24px;
`

export const ContactMessage = styled.div`
  h1 {
    margin: 40px auto 20px;
    max-width: 500px;
    font-size: 2rem;
  }
  p {
    margin: 10px auto;
    max-width: 500px;
  }

`

export const ContactFormContainer = styled.div`
  margin: 0 auto;
  max-width: 500px;
  form {
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
      -webkit-background-clip: text;
      -webkit-text-fill-color: #ffffff;
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: inset 0 0 20px 20px #23232329;
    }

    input, textarea {
      color: ${({ theme }) => theme.textColor};
      font-weight: 500;
      font-size: 18px;
      border-radius: 5px;
      line-height: 22px;
      background: transparent;
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
      transition: all 0.3s;
      padding: 13px;
      width: 100%;
      box-sizing: border-box;
      margin-top: 15px;
      outline: 0;
    }

    .error {
      color: ${({ theme }) => theme.palette.red};
      font-size: 1rem;
    }

    textarea {
      height: 100px;
      line-height: 150%;
      resize: vertical;
      color: ${({ theme }) => theme.textColor};
    }

    .submit-section {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px 20px;
      padding-top: 10px;
      @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 16px 0;
      }
    }

    #slide {
      position: absolute;
      right: 0%;
      width: 100%;
      height: 90px;
      padding: 0 4px;
      background: ${({ theme }) => theme.palette.black};
      transition: 1s;
      outline: none;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;

      animation-name: commentSlide;
      animation-duration: 1s;
      animation-timing-function: ease-in-out;

      @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
        padding: 0 36px 0 16px;
      }

      p {
        color: #fff;
      }

      .close {
        position: absolute;
        top: 12px;
        right: 8px;
        span {
          display: block;
          width: 30px;
          height: 4px;
          margin-bottom: 5px;
          position: relative;
          background: #fff;
          border-radius: 2px;
          z-index: 1000;
          cursor: pointer;
          transform: rotate(-45deg) translate(-7px, 10px);
          transform-origin: -1px -2px;
          transition: transform 0.5s 
            cubic-bezier(0.77, 0.2, 0.05, 1) 0s, 
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1) 0s, 
            opacity 0.55s ease 0s;
        }
        span:first-child {
          transform-origin: 0% 0%;
          transform: rotate(45deg) translate(4px, -6px);
        }
        span:nth-last-child(1) {
          transform: rotate(-45deg) translate(-7px, 10px);
        }
      }
    }

    @keyframes commentSlide {
      from {
        right: -100%;
      }
      to {
        right: 0%;
      }
    }

    button {
      width: 100%;
      background: ${({ theme }) => theme.palette.primary.main};
      border-radius: 5px;
      border: 0;
      cursor: pointer;
      color: white;
      margin-top: 15px;
      font-size: 24px;
      padding-top: 10px;
      padding-bottom: 10px;
      transition: all 0.3s;
      font-weight: 700;
    }
    button:hover {
      background: "rgb(33, 99, 151, .6)";
    }
    .invalid {
      background: ${({ theme }) => theme.palette.red};
    }
  }
`

