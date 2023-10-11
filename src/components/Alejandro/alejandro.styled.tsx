import styled from "styled-components"

export const AboutMeContainer = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.md};
  margin: 32px auto;
  padding: 0 24px;
  .about-me-info {
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
      display: grid;
      align-items: center;
      gap: 0;
      p {
        color: ${({ theme }) => theme.textColor};
        font-size: 1.5rem;
        line-height: 1.2;
        text-align: left;
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

  .about-jobs {
    .step {
      margin-bottom: 24px;
      h2 {
        font-size: 24px;
        padding: 8px 0;
        color: ${({ theme }) => theme.palette.primary.main};
      }
      p {
        padding-bottom: 8px;
        color: ${({ theme }) => theme.textColor};

        strong {
          font-weight: 600;
          padding-right: 8px;
          color: ${({ theme }) => theme.palette.red};
        }
      }
      ul {
        padding-bottom: 10px;
        li::before {
          content: "↬";
          display: inline;
          font-style: normal;
          letter-spacing: 2px;
          font-size: 1em;
          padding-left: 16px;
          margin: 0;
          font-weight: 600;
          color: ${({ theme }) => theme.palette.red};
          text-transform: uppercase;
        }
        li {
          list-style-type: none;
        }
        @media (max-width: ${({ theme }) => theme.breakpoint.xs}){
          li::before {
            padding-left: 0;
          }
        }
      }
      span {
        a {
          color: ${({ theme }) => theme.palette.primary.main};
        }
      }
    }
  }
`