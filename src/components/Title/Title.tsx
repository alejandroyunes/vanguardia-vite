import { TitleContainer } from './title.styled';

interface TitleProps {
  title?: string
  message?: string
  left?: boolean
}

export default function Title({ title, message, left }: TitleProps) {
  
  return (
    <TitleContainer className={left ? 'left' : ''}>
      <h1>{title}</h1>
      <p>{message}</p>
    </TitleContainer>
  )
}