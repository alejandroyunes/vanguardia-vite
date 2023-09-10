import styled from "styled-components"

export const AboutContainer = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.md};
  margin: 32px auto;
  display: grid;
  padding: 0 24px;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, auto);
  grid-template-areas:
    "about-child-two"
    "child-three";

  .about-child-two {
    margin: 0 auto 32px;
    h1 {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.gray};
      font-size: 2rem;
      line-height: 1.2;
      max-width: 760px;
      text-align: center;
    }
  }
  .child-three {
    text-align: center;
    p {
      font-size: 1.125rem;
      line-height: 1.5;
      margin: 0 auto;
      max-width: 432px;
      color: ${({ theme }) => theme.palette.gray};
    }
  }


.about-us-info {
  display: grid;
  max-width: ${({ theme }) => theme.breakpoint.md};
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(1, auto);
  grid-template-areas: "about-child-one" "about-child-two";
  padding-right: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, auto);
    margin: 0 auto 24px;
  }

  .about-child-one {
    display: flex;
    align-items: center;
    padding-top: 8px;
    h1 {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.gray};
      font-size: 2rem;
      padding: 0 32px;
      line-height: 1.2;
      text-align: center;
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        font-size: 2.6rem;
      }
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
        padding: 0 16px;
      }
    }
  }
  .about-child-two {
    display: flex;
    align-items: center;
    .about-logo {
      max-width: 500px;
      height: auto;
      margin: 32px auto 0;
      padding: 0 16px;
    }
    img {
      width: 100%;
      height: auto;
    }
    @include mq($screen-tablet) {
      .about-logo {
        padding: 0;
      }
    }
  }
}
`