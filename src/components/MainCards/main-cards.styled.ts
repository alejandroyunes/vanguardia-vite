import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  max-width:  ${({ theme }) => theme.breakpoint.sm};

	.card-wrapper  {
    padding: 24px;
    margin: 16px;
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 0.5rem;
    width: 280px;
    height: 440px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
      margin: 8px;
      padding: 16px;
    }
  }

  .card-img {
    text-align: center;
  }

  svg {
    height: 140px;
  }
  img {
    width: 140px;
    height: 140px;
  }
  h2 {
    font-size: 1.5rem;
    padding: 8px 0;
    font-weight: 600;
    color:  ${({ theme }) => theme.palette.gray};
  }
  h3 {
    color: ${({ theme }) => theme.palette.red};
    padding: 2px 0;
    font-weight: 500;
    font-size: 16px;
  }
  h6 {
    color: ${({ theme }) => theme.palette.gray};
    padding:  8px 0;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
  }
  p {
    padding:  8px 0;
    color: ${({ theme }) => theme.palette.black};
  }
`

export const MobileCardContainer = styled.div`
	display: none;
	@media(max-width: ${({ theme }) => theme.breakpoint.sm}){
		display: block;
		width: 100%;
    .card-wrapper {
      margin: 8px auto;
    }
    .control-dots {
      .dot {
        background: ${({ theme }) => theme.palette.red};
        box-shadow: 1px 1px 2px rgb(112 54 54 / 90%)
      }
    }
  }
`

export const DesktopCardContainer = styled.div`
  display: flex; 
  @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
    display: none;
  }
`
