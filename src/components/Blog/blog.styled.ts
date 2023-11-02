import styled from "styled-components"

export const BlogContainer = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, auto);
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    margin: 0 0 16px;
    line-height: 1.3;
    max-width: 660px;
    margin: 16px auto;
    text-align: center;
    color: ${({ theme }) => theme.palette.primary.main};
  }
  p {
    font-size: 1.125rem;
    line-height: 1.5;
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(3, auto);
  }
  
  .child-card {
    margin: 24px 0;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }
`