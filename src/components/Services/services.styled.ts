import styled from 'styled-components'

export const ServicesContainer = styled.div`
	padding: 0 24px;

	.services-three-columns {
		max-width: ${({ theme }) => theme.breakpoint.md};
		margin: 24px auto 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(1, auto);

		h2 {
			font-size: 24px;
			font-weight: 600;
			margin: 0 0 16px;
			line-height: 1.3;
			padding: 0 32px;
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
			padding: 0 32px;
			color: ${({ theme }) => theme.textColor};
		}
		.design-svg {
			max-width: 220px;
			width: 100%;
			/* pointer-events: none; */
			margin: 0 auto;
			order: -1;
		}
		.child-one {
			text-align: center;
			margin: 0 auto;
			display: grid;
			padding-top: 16px;
		}
	}

	@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
		.services-three-columns {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(3, auto);
			grid-gap: 10px;
			.design-svg {
				order: 0;
			}
		}
	}


`