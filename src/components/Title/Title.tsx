import { TitleContainer } from './title.styled';

interface TitleProps {
  title: string
  message: string
}

export default function Title({ title, message }: TitleProps) {
  return (
    <TitleContainer>
      <h3>{title}</h3>
      <h2>{message}</h2>
    </TitleContainer>
  )
}