import styled from "styled-components"

export const BlogContainer = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.md};
  margin: 20px auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(3, auto);
  }
  h4 {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 16px;
    line-height: 1.3;
    padding: 0 32px;
    max-width: 660px;
    margin: 16px auto;
    text-align: center;
    color: ${({ theme }) => theme.palette.primary.main};
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}){
      padding: 0 16px;
    }
  }
  p {
    font-size: 1.125rem;
    line-height: 1.5;
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
    padding: 0 32px;
    color: ${({ theme }) => theme.textColor};
    @media (max-width: ${({ theme }) => theme.breakpoint.sm}){
      padding: 0 16px;
    }
  }

  .child-card {
    text-align: center;
    margin: 24px 0;
    padding: 0 24px;
  }

  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
  }
`