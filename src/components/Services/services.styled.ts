import styled from 'styled-components'

export const ServicesContainer = styled.div`
	.services-main-content {
		max-width:  ${({ theme }) => theme.breakpoint.md};
		padding: 0 24px;
		margin: 0 auto;
    p {
		  font-size: 1.2rem;
      color: ${({ theme }) => theme.palette.gray};
		  text-align: center;
	  }
	}
	.services-page-billboard {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(1, auto);
		grid-template-areas: "services-billboard-child-one" "services-billboard-child-two";

		.services-page-billboard-child-one {
			padding-bottom: 16px;
		}
	}

@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
  .services-page-hero {
	  text-align: center;
	  margin: 0 auto;
	  width: 100%;
	  img {
		  max-width: 100%;
	  }
  }
  .services-main-content {
	margin: 0 auto;
  max-width:  ${({ theme }) => theme.breakpoint.md};
	padding: 0 16px;
  }
}

.services-three-columns {
	max-width: ${({ theme }) => theme.breakpoint.md};
	margin: 24px auto 0;
	display: grid;
  grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(1, auto);
	grid-template-areas: "child-one" "child-two" "child-three";

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
	}
	p {
		font-size: 1.125rem;
		line-height: 1.5;
		max-width: 660px;
		margin: 0 auto;
		text-align: center;
		padding: 0 32px;
		color: ${({ theme }) => theme.palette.gray};
	}
	.design-svg {
		max-width: 340px;
		width: 100%;
		pointer-events: none;
		margin: 0 auto;
		order: 1;
	}
	.design-svg-2 {
		max-width: 340px;
		width: 100%;
		pointer-events: none;
		margin: 0 auto;
		order: 1;
	}

	.services-three-columns-child-one {
		text-align: center;
		margin: 0 auto;
		display: grid;
		padding-top: 16px;
	}
	.services-three-columns-child-two {
		text-align: center;
		margin: 0 auto;
		display: grid;
		padding-top: 16px;
	}
	.services-three-columns-child-three {
		text-align: center;
		margin: 0 auto;
		display: grid;
		padding-top: 16px;
	}
	img {
		margin: 0 auto;
	}
}

@media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
	.services-three-columns {
    grid-template-columns: repeat(1, 1fr);
	  grid-template-rows: repeat(3, auto);
		grid-gap: 10px;
    grid-template-areas:
		"child-one"
		"child-two"
		"child-three";
		.design-svg {
			order: 0;
		}
		.design-svg-2 {
			order: 0;
		}
		.services-three-columns-child-one {
			padding-top: 0;
		}
	}
}

.services-tech-mobile {
		display: none;
}

@media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
  .services-tech-mobile {
    display: block;
	.services-tech-mobile-container {
		display: grid;
		grid-template-columns: repeat(1fr);
		grid-template-rows: repeat(1fr 1fr);
		grid-template-areas: "services-tech-mobile-child-one" "services-tech-mobile-child-two";
		padding: 0 16px;
		width: 100%;
		.html-svg {
			width: 80%;
			padding: 0 8px;
		}
		.css-svg {
			width: 80%;
			padding: 0 8px;
		}
		.js-svg {
			width: 60%;
			padding: 0 8px;
		}
		.react-svg {
			width: 80%;
			margin: auto 0;
			padding: 10px 8px 0;
		}
		.node-svg {
			width: 40%;
			padding: 0 8px;
		}
		.wordpress-svg {
			width: 30%;
			padding: 0 8px;
		}
		.typescript-svg {
			width: 30%;
			padding: 0 8px;
		}
		.nginx-svg {
			width: 40%;
			padding: 0 8px;
		}
		.apache-svg {
			width: 30%;
			padding: 0 8px;
		}
	}
	.services-tech-mobile-child-one {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.services-tech-mobile-child-two {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
}

.services-tech {
	display: block;
	max-width: 1200px;
	margin: 30px auto 40px;
	padding: 0 24px;

	.services-tech-container {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.html-svg {
				width: 100px;
			}
			.css-svg {
				width: 100px;
			}
			.js-svg {
				width: 72px;
			}
			.react-svg {
				width: 100px;
				margin: auto 0;
			}
			.node-svg {
				width: 120px;
				margin: auto 0;
			}
			.wordpress-svg {
				width: 80px;
				margin: auto 0;
			}
			.typescript-svg {
				width: 80px;
				margin: auto 0;
			}
			.nginx-svg {
				width: 80px;
				margin: auto 0;
			}
			.apache-svg {
				width: 80px;
				margin: auto 0;
			}
	}
}

@media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
  .services-tech {
	  display: none;
  }
}
`