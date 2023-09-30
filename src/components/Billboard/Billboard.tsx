import Animation from "./animation"
import { BillboardContainer } from "./billboard.styled"

export interface AppProps {
  title: string
  subtitle: string
  button: string
}

export default function Billboard(props: AppProps) {

  const { title, subtitle, button } = props

  return (
    <BillboardContainer>
      <div className="billboard-title">
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        <div className="billboard-email">
          <a href="#contact">{button}</a>
        </div>
      </div>

      <div className="billboard-svg">
        <Animation />
      </div>

    </BillboardContainer>
  );
}
