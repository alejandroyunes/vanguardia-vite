import styled from 'styled-components'

export const TitleContainer = styled.div`
  margin: 32px auto;
  padding: 0 16px;
	max-width: ${({ theme }) => theme.breakpoint.md};
  &.left {
    h1, h2 {
      text-align: left;
    }
  }
  p {
    margin-top: 0px;
    text-align: center;
    font-size: 1.2rem;
		font-weight: 400;
    color: ${({ theme }) => theme.palette.gray};
  }
  h1 {
    text-align: center;
    font-size: 2rem;
		font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
    line-height: 3rem;
  }
`