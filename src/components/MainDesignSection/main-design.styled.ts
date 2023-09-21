import styled from 'styled-components'

export const MainDesignContainer = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(2, .5);
  grid-template-rows: repeat(1, 1fr);
  gap: 4px 4px;
	max-width: ${({ theme }) => theme.breakpoint.md};
  grid-template-areas:
    "image-one image-one image-two image-three"
    "image-one image-one image-four image-five";
    outline: 3px solid red;
  img {
    width: 100%;
    height: 100%;
  }

  .image-one {
    grid-area: image-one;
    position: relative;
    transform: rotateY(180deg);
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
  }
  .image-five:hover .overlay-red {
    opacity: 1;
  }

@media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
  outline: 3px solid green;
    grid-template-columns: auto;
    grid-template-rows: repeat(4, .5);
    gap: 16px 16px;
    padding-top: 30px;
    grid-template-areas:
    "image-one image-one" 
    "image-one image-one"
    "image-two image-three"
    "image-four image-five";
  }
`
