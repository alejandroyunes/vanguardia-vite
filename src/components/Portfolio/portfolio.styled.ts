import styled from "styled-components"

export const PortfolioContainer = styled.div`
  h1 {
		font-weight: bold;
		color: ${({ theme }) => theme.palette.primary.main};
		font-size: 2.8rem;
		line-height: 1.2;
	}
	h2 {
		color: ${({ theme }) => theme.palette.gray};
		font-size: 1.2rem;
		line-height: 2rem;
		padding: 16px 0;
    font-weight: 400;
	}
.portfolio-page-hero {
	text-align: center;
	margin: 0 auto;
	width: 100%;
	img {
		max-width: 100%;
	}
}

.portfolio-billboard {
	display: grid;
  max-width: ${({ theme }) => theme.breakpoint.md};
	min-height: 100%;
	grid-gap: 30px;
	margin: 0px auto 80px;
  padding: 0 24px;
  grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(1, auto);
	grid-template-areas: "portfolio-billboard-child-one portfolio-billboard-child-two";

  .buttons {
		display: flex;
		margin-top: 16px;
	}

	.portfolio-billboard-child-one {
		grid-area: portfolio-billboard-child-one;
		margin: auto 0;
	}
	.portfolio-billboard-child-two {
		grid-area: portfolio-billboard-child-two;
    img {
			width: 100%;
			max-height: auto;
			}
	}
}

@media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
	.portfolio-billboard {
	  grid-gap: 30px 30px;
	  grid-template-columns: repeat(1, auto);
	  grid-template-rows: repeat(2, auto);
	  grid-template-areas:
		"portfolio-billboard-child-one"
		"portfolio-billboard-child-two";
	  margin: 0px auto 60px;
	  padding: 0 16px;
		.portfolio-billboard-child-two {
			grid-area: portfolio-billboard-child-two;
      img {
			  width: 100%;
			  max-height: auto;
			  cursor: pointer;
		  }
		}
	}
}

.portfolio-billboard-two {
	display: grid;
	min-height: 100%;
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0px auto 80px;
  grid-gap: 30px;
  padding: 0 24px;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(1, auto);
	grid-template-areas: "portfolio-billboard-two-child-one portfolio-billboard-two-child-two";
  
  .buttons {
		display: flex;
		margin-top: 16px;
	}
	.portfolio-billboard-two-child-one {
		grid-area: portfolio-billboard-two-child-one;
		img {
			width: 100%;
			max-height: auto;
		}
	}
	.portfolio-billboard-two-child-two {
		grid-area: portfolio-billboard-two-child-two;
	}
	
}

@media (max-width: ${({ theme }) => theme.breakpoint.xs}){
	.portfolio-billboard-two {
    grid-gap: 30px 30px;
	  grid-template-columns: repeat(1, auto);
	  grid-template-rows: repeat(2, auto);
	  grid-template-areas:
		  "portfolio-billboard-two-child-two"
		  "portfolio-billboard-two-child-one";
	  margin: 60px auto;
	  padding: 0 16px;

	.portfolio-billboard-two-child-one {
		grid-area: portfolio-billboard-two-child-one;
			img {
			width: 100%;
			max-height: auto;
			cursor: pointer;
		}
	}
	.portfolio-billboard-two-child-two {
		grid-area: portfolio-billboard-two-child-two;
		padding-right: 24px;
		margin: auto 0;
		}
	}
}
`