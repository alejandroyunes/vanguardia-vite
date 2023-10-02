import { TitleContainer } from './title.styled';

interface TitleProps {
  title?: string
  message?: string
}

export default function Title({ title, message }: TitleProps) {
  return (
    <TitleContainer>
      <h1>{title}</h1>
      <h2>{message}</h2>
    </TitleContainer>
  )
}