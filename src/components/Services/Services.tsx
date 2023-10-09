import Title from "../Title/Title"

import { ServicesContainer } from "./services.styled"
import { Helmet, HelmetProvider } from "react-helmet-async"

interface ServicesProps {
  title: string
  subtitle: string
  meta: string
    cards: {
      title: string
      subtitle: string
      image: () => React.ReactNode
      alt: string
    }[]
  }

export default function Services({ title, subtitle, cards, meta }: ServicesProps) {

  return (
    <ServicesContainer>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={meta} />
        </Helmet>
      </HelmetProvider>

      <Title title={title} message={subtitle} />

      <div className="services-three-columns">
        {cards.map((card, i) => (
          <div className="child-one" key={i}>
            <div className="design-svg">
              <card.image arial-label={card.alt} />
            </div>
            <h2>{card.title}</h2>
            <p>
              {card.subtitle}
            </p>
          </div>
        ))}

      </div>

    </ServicesContainer>
  )
}
