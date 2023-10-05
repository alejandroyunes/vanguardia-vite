import styled from "styled-components"

export const ToolContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.black};
  padding: 8px;
  height: 30px;
  margin: 0 8px 8px 0;
  .icon-svg {
    height: 24px;
    padding-right: 8px;
  }
  .text {
    p {
      font-size: 1rem;
      color: ${({ theme }) => theme.palette.white};
      font-weight: 600;
      line-height: 1rem;
      height: auto;
    }
  }
`



