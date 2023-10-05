import styled from "styled-components"

export const ToolContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding-right: 8px;
  .text {
    p {
      font-size: .8rem;
      color: ${({ theme }) => theme.palette.black};
      font-weight: 400;
      line-height: 1.4;
    }
  }
`

