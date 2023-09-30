import Animation from "./animation"
import { BillboardContainer } from "./billboard.styled"

export interface BillboardProps {
  title: string
  subtitle: string
  button: string
}

export default function Billboard(props: BillboardProps) {

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
        <div className="billboard-contact">
          <a href="#contact">{button}</a>
        </div>
      </div>

      <div className="billboard-svg">
        <Animation arial-label="image about web design and development"/>
      </div>

    </BillboardContainer>
  );
}
