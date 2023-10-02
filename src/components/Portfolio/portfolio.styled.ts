import styled from "styled-components"

export const PortfolioContainer = styled.div`
	.portfolio-billboard {
		display: grid;
		max-width: ${({ theme }) => theme.breakpoint.md};
		min-height: 100%;
		grid-gap: 30px;
		margin: 0px auto 80px;
		padding: 0 24px;
		grid-template-columns: repeat(2, .5fr);
		h1 {
			font-weight: bold;
			color: ${({ theme }) => theme.palette.primary.main};
			font-size: 2.8rem;
			line-height: 1.2;
		}
		h2 {
			color: ${({ theme }) => theme.textColor};
			font-size: 1.2rem;
			line-height: 2rem;
			padding: 16px 0;
			font-weight: 400;
		}
		.buttons {
			display: flex;
			margin-top: 16px;
		}
		.child-two {
			margin: auto 0;
			img {
				width: 100%;
				max-height: auto;
				}
		}

		@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
			grid-gap: 30px 30px;
			grid-template-columns: repeat(1, auto);
			grid-template-rows: repeat(2, auto);
			margin: 0px auto 60px;
			h1 {
				font-size: 2em;
			}
		}
	}

	.portfolio-billboard:nth-child(odd) {
		.child-two {
			order: -1
		}
		@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
			.child-two {
				order: 1
			}
		}
	}
	.portfolio-billboard:last-child {
		margin-bottom: 0;
	}	
`