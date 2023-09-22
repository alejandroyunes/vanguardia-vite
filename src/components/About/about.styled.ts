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
    padding-right: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(2, auto);
      margin: 0 auto 24px;
    }

    .about-title {
      display: flex;
      align-items: center;
      padding-top: 8px;

      h1 {
        font-weight: bold;
        color: ${({ theme }) => theme.textColor};
        font-size: 2rem;
        padding: 0 32px;
        line-height: 1.2;
        text-align: center;
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
          font-size: 1.6rem;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
          padding: 0 16px;
        }
      }
    }
    .about-image {
      display: flex;
      align-items: center;
      .about-logo {
        max-width: 300px;
        height: auto;
        margin: 32px auto 0;
        padding: 0 16px;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .about-subtitle {
    h1 {
      font-weight: 400;
      color: ${({ theme }) => theme.palette.secondary.main};
      font-size: 2rem;
      line-height: 1.2;
      max-width: 760px;
      text-align: center;
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        font-size: 1.4rem;
      }
    }
  }
`