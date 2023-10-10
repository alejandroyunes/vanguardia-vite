import styled from 'styled-components'

export const BillboardContainer = styled.div`
  padding: 32px 24px;
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  gap: 0;
  max-width: ${({ theme }) => theme.breakpoint.md};
  @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    padding: 20px 24px;
  }
  .billboard-title {
    padding-right: 20px;
    margin: auto 0;
    @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    padding-right: 0;
    }
    h1 {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.primary.main};
      font-size: 3rem;
      @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
        font-size: 2.6rem;
      }
    }
    h2 {
      color: ${({ theme }) => theme.textColor};
      font-size: 1.5rem;
      line-height: 2rem;
      padding: 20px 0;
      font-weight: 400;
    }
  }
  .billboard-svg {
    text-align: center;
    img {
      width: auto;
      height: 440px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
      img {
        height: 329px;
      }
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .billboard-contact {
    display: inline-flex;
    scroll-behavior: smooth;
    line-height: 42px; 
      a {
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: white;
        border: none;
        width: 140px;
        height: 42px;
        cursor: pointer;
        text-decoration: none;
        display: grid;
        place-items: center;
      }
      a:hover {
        opacity: 0.8;
      }
  }
`