import styled from "styled-components"

export const LanguageContainer = styled.div`
  height: 42px;
  display: flex;
  margin-right: 4px;
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 12px 10px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    font-size: .9rem;
  }
`