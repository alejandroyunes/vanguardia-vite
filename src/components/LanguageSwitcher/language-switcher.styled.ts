import styled from "styled-components"

export const LanguageContainer = styled.div`
  height: 50px;
  display: flex;
  margin-right: 10px;
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 15px 10px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    font-size: .9rem;
  }
`