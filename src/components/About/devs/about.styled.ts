import styled from "styled-components"

export const AboutContainer = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.md};
  margin: 32px auto;
  padding: 0 24px;
  .about-us-info {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(1, auto);
    grid-template-areas: "about-title" "about-image";
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, auto);
      margin: 0 auto;
    }
    .about-title {
      display: flex;
      align-items: center;
      h1 {
        font-weight: bold;
        color: ${({ theme }) => theme.textColor};
        font-size: 1.5rem;
        line-height: 1.2;
        text-align: center;
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
          font-size: 1.3rem;
        }
      }
    }
    .about-image {
      display: flex;
      align-items: center;
      .about-logo {
        max-width: 450px;
        height: auto;
        margin: 32px auto 0;
        padding: 0 16px;
      }
      img {
        width: 100%;
        height: auto;
        border-radius: 50%; 
        overflow: hidden; 
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .about-subtitle {
    padding-top: 12px;
    h2 {
      font-weight: 400;
      color: ${({ theme }) => theme.palette.secondary.main};
      font-size: 1.3rem;
      line-height: 1.2;
      max-width: 760px;
      margin: 0 auto;
      text-align: center;
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        font-size: 1.2rem;
      }
    }
  }
`