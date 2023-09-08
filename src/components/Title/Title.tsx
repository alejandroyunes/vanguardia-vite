import { FC } from 'react';
import { TitleContainer } from './title.styled';

interface TitleProps {
  title: string
  message: string
}

const Title: FC<TitleProps> = ({
  title,
  message,
}) => {

  return (
    <TitleContainer>
      <h3>{title}</h3>
      <h2>{message}</h2>
    </TitleContainer>
  )
}
export default Title