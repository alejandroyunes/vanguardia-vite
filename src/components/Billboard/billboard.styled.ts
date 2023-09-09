import styled from 'styled-components'

export const BillboardContainer = styled.div`
    padding: 32px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: ${({ theme }) => theme.breakpoint.md};
    @media(max-width: ${({theme}) => theme.breakpoint.xs}){
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 2fr;
      padding: 20px 24px;
    }
  	.billboard-title {
      padding-right: 20px;
      @media(max-width: ${({theme}) => theme.breakpoint.xs}){
      padding-right: 0;
      padding-bottom: 32px; 
      }
      h1 {
        font-weight: bold;
        color: ${({ theme }) => theme.palette.primary.main};
        font-size: 3.2rem;
        line-height: 1.2;
        @media(max-width: ${({theme}) => theme.breakpoint.sm}){
          font-size: 2.6rem;
        }
        @media(max-width: ${({theme}) => theme.breakpoint.xs}){
          font-size: 2rem;
        }
      }
      h2 {
        color: ${({ theme }) => theme.palette.gray};
        font-size: 1.2rem;
        line-height: 2rem;
        padding: 20px 0 28px;
        font-weight: 500;
        @media(max-width: ${({theme}) => theme.breakpoint.sm}){
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.225;
        }
      }
    }
		.billboard-svg {
      text-align: center;
      svg {
        max-width: 400px;
      }
      @media(max-width: ${({theme}) => theme.breakpoint.xs}){
        svg {
          max-width: 280px;
        }
      }
    }
    .billboard-email {
      display: flex;
      input[type="text"],
      input[type="submit"] {
        width: 70%;
        max-width: 460px;
        padding: 12px;
        display: inline-block;
        border: none;
        outline: none;
        background: lightgray;
      }
      input[type="submit"] {
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: white;
        border: none;
        width: 30%;
        margin-left: 8px;
        cursor: pointer;
      }
      input[type="submit"]:hover {
        opacity: 0.8;
      }
    }
`