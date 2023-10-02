import styled from "styled-components"

export const LanguageContainer = styled.div`
  height: 42px;
  display: flex;
  margin-right: 4px;
  span {
    color: ${({ theme }) => theme.palette.primary.main};
    padding: 16px 10px;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    font-size: .9rem;
    @media (max-width: 768px) {
      padding: 13px 10px;
    }
  }
`