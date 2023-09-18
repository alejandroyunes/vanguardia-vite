
import styled from 'styled-components'

export const ThreeCardContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
  max-width:  ${({ theme }) => theme.breakpoint.sm};

	.three-card__wrapper {
      padding: 24px;
			margin: 16px;
      background-color: ${({ theme }) => theme.palette.white};
      border-radius: 0.5rem;
      width: 280px;
      height: 460px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
			@media(max-width: ${({ theme }) => theme.breakpoint.sm}){
				margin: 8px;
				padding: 16px;
			}
  }

    .three-card__img {
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

  #rocket {
    animation: topBottom 5s infinite;
  }

  @keyframes topBottom {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, -200px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  #circle {
    animation-name: rotateme;
    animation-duration: 40s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes rotateme {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const MobileCardContainer = styled.div`
	display: none;
	@media(max-width: ${({ theme }) => theme.breakpoint.sm}){
		display: block;
		width: 100%;
	.three-card__wrapper {
		margin: 8px auto;
	}
}
`

export const DesktopCardContainer = styled.div`
		display: flex; 
		@media(max-width: ${({ theme }) => theme.breakpoint.sm}){
			display: none;
		}
`
