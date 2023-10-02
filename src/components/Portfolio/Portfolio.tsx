import { PortfolioContainer } from "./portfolio.styled"
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"
import Suitcase from "../../pages/translate/svgs/portfolio/suitcase"

interface PorfolioProps {
  title: string
  items: {
    title: string
    subtitle: string
    image: string
    alt: string
    url: string
  }[]
}

export default function Portfolio({ title, items }: PorfolioProps) {
  return (
    <PortfolioContainer>
      <Title title={title} />


      {items.map((e, i) => (
        <div className="portfolio-billboard" key={i}>
          <div className="child-one">
            <h1>{e.title}</h1>
            <h2>
              {e.subtitle}
            </h2>
            <div className="buttons">
              <Button
                label="Ver Sitio"
                category="primary"
                size="sm"
                icon={Suitcase}
                onClick={() =>
                  window.open(e.url, "_blank")
                }
              />
            </div>
          </div>
          <div className="child-two">
            <img src={e.image} alt={e.alt} />
          </div>
        </div>
      ))
      }
    </PortfolioContainer >
  )
}