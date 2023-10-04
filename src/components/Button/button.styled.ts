import styled from 'styled-components'

export const ButtonContainer = styled.div`
  .btn {
    border-radius: 36px;
    padding: 8px 40px;
    margin-right: 6px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    letter-spacing: 0.5px;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    font-size: 1.20rem;
    box-shadow: 0 0 2px rgba(${({ theme }) => theme.palette.black}, 0.28),
    0 1px 3px rgba(${({ theme }) => theme.palette.black}, 0.1);
    
    &:hover {
        transform: scale(.98);
        box-shadow: 0 1px 8px rgba(${({ theme }) => theme.palette.black}, 0.14),
        0 3px 8px rgba(${({ theme }) => theme.palette.black}, 0.11);
    }
    &__wrapper{
      display: flex;
      align-items: center;
    }
    &__label{
      font-size: 1.08rem;
      letter-spacing: 40;
      @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {     
        font-size: 1rem;
        padding-top: 2px;
      }
    }
    &__icon_div{
      align-items: center;
    }

    &__icon {
      padding: 5px 0 0 8px;
      svg {
        width: 24px;
        height: 24px;
      }
    .btn-center{
        text-align: center;
    }
    }
}
`