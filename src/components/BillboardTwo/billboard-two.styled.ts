import styled from 'styled-components'

export const BillboardTwoContainer = styled.div`
		max-width: ${({ theme }) => theme.breakpoint.md};
		margin: 60px auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		grid-gap: 10px;
		padding: 0 24px;
		h1 {
			color: ${({ theme }) => theme.palette.primary.main};
			font-size: 2.4rem;
			line-height: 1.2;
			font-family: ${({ theme }) => theme.fonts.primary};
		}
		h2 {
			color: ${({ theme }) => theme.palette.gray};
			font-size: 1.2rem;
			line-height: 2rem;
			padding: 16px 0;
			font-weight: 400;
		}
		h3 {
			color: ${({ theme }) => theme.palette.red};
			font-weight: 500;
			font-size: 16px;
		}
		p {
		color: ${({ theme }) => theme.palette.gray};
		}
		img {
			max-height: 380px;
			width: auto;
		}
@media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
	grid-template-columns: repeat(1, auto);
	grid-template-rows: repeat(2, auto);
}
`

export const BillboardLeft = styled.div`
 ul {
    list-style-type: none;
    padding-left: 0; /* Remove default left padding */
  }

  li {
    font-size: 1em;
		line-height: 2;
  	display: flex;
  	align-items: center;
		p {
			padding-left: 4px;
		}
  }
`

export const BillboardRight = styled.div`
	position: relative;
	margin: 0 auto;
	img {
		width: 100%;
		height: auto;
	}
		.btn-video {
			display: block;
			position: relative;
		}
		.btn-video:before {
			content: "";
			position: absolute;
			top: 10px;
			left: 10px;
			right: 10px;
			bottom: 10px;
			background: rgba(0, 0, 0, 0.1);
			opacity: 0;
			visibility: hidden;
			-webkit-transition: 0.3s all ease;
			-o-transition: 0.3s all ease;
			transition: 0.3s all ease;
		}
		.btn-video .wrap-icon-play {
			position: absolute;
			top: 50%;
			left: 50%;
			width: 50px;
			height: 50px;
			background: whitesmoke;
			border-radius: 50%;
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			-webkit-box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.5);
			box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.5);
		}
		.btn-video .wrap-icon-play > svg {
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
		}
		.btn-video:hover:before {
			opacity: 1;
			visibility: visible;
		}
`

