import { PortfolioContainer } from "./portfolio.styled"
import Title from "../../components/Title/Title"
import Button from "../../components/Button/Button"
import Suitcase from "../../pages/translate/svgs/portfolio/suitcase"
import Technologies from "./Technologies/Technologies"
import Github from "../Footer/svgs/github"

interface PorfolioProps {
  title: string
  subtitle: string
  items: {
    title: string
    subtitle: string
    image: string
    alt: string
    url: string
    github: string
    technologies: string[]
  }[]
}

export default function Portfolio({ title, items, subtitle }: PorfolioProps) {

  return (
    <PortfolioContainer>
      <Title title={title} message={subtitle} />

      {items.map((e, i) => (
        <>
          <div className="portfolio-billboard" key={i}>
            <div className="child-one">

              <div className="item-info">
                <h2>
                  <strong>
                    {e.title}
                  </strong>
                </h2>
                <p>
                  {e.subtitle}
                </p>
              </div>

              <Technologies technologies={e.technologies} />

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
                <div className="portfolio-repo">
                  <a href={e.github} target="_blank">
                    <Github arial-label="svg element" />
                  </a>
                </div>
              </div>
            </div>

            <div className="child-two">
              <img src={e.image} alt={e.alt} />
            </div>
          </div>
        </>

      ))
      }
    </PortfolioContainer >
  )
}