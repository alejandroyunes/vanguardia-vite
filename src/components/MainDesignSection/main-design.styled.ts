import styled from 'styled-components'

export const MainDesignContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, .5);
  grid-template-rows: repeat(1, 1fr);
	max-width: ${({ theme }) => theme.breakpoint.md};
  grid-template-areas:
    "image-one image-one image-two image-three"
    "image-one image-one image-four image-five";
  img {
    width: 100%;
    height: 220px;
  }
  .image-one {
    grid-area: image-one;
    position: relative;
    img {
      width: 100%;
      height: 480px;
    }
  }

  .image-one:hover .overlay-red {
    opacity: 1;
  }
  .image-two {
    grid-area: image-two;
    position: relative;
  }
  .image-two:hover .overlay-red {
    opacity: 1;
  }
  .image-three {
    grid-area: image-three;
    position: relative;
    transform: rotateY(180deg);
  }
  .image-three:hover .overlay-red {
    opacity: 1;
  }
  .image-four {
    grid-area: image-four;
    position: relative;
  }
  .image-four:hover .overlay-red {
    opacity: 1;
  }
  .image-five {
    grid-area: image-five;
    position: relative;
    transform: rotateY(180deg);
  }
  .image-five:hover .overlay-red {
    opacity: 1;
  }

@media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: auto;
    grid-template-rows: repeat(4, .5);
    padding-top: 30px;
    grid-template-areas:
    "image-one image-one" 
    "image-one image-one"
    "image-two image-three"
    "image-four image-five";
  }
`
