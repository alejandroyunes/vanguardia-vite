import Title from "../Title/Title"

import HtmlSvg from '../../pages/translate/svgs/services/technologies/html.svg'
import CssSvg from "../../pages/translate/svgs/services/technologies/css.svg"
import JsSvg from "../../pages/translate/svgs/services/technologies/javascript.svg"
import ReactSvg from "../../pages/translate/svgs/services/technologies/reactsvg.svg"
import NodeSvg from "../../pages/translate/svgs/services/technologies/node-js.svg"
import WordpressSvg from "../../pages/translate/svgs/services/technologies/wordpress.svg"
import TypescriptSvg from "../../pages/translate/svgs/services/technologies/typescript.svg"
import NginxSvg from "../../pages/translate/svgs/services/technologies//nginx-n.svg"
import ApacheSvg from "../../pages/translate/svgs/services/technologies/apache.svg"

import { ServicesContainer } from "./services.styled"

interface ServicesProps {
  title: string
  subtitle: string
  cards: {
    title: string
    subtitle: string
    image: () => React.ReactNode
    alt: string
  }[]
}

export default function Services({ title, subtitle, cards }: ServicesProps) {

  return (
    <ServicesContainer>
      <Title title={title} />

      <div className="subtitle">
        <p>{subtitle}</p>
      </div>

      <div className="services-three-columns">
        {cards.map((e, i) => (
          <div className="child-one" key={i}>
            <div className="design-svg">
              <e.image  arial-label={e.alt}/>
            </div>
            <h2>{e.title}</h2>
            <p>
              {e.subtitle}
            </p>
          </div>
        ))}

      </div>

      <Title title={"Tecnologías"} />

      <div className="services-tech">
        <div className="child-one">
          <div className="node-svg">
            <img src={NodeSvg} alt="" />
          </div>
          <div className="typescript-svg">
            <img src={TypescriptSvg} alt="" />
          </div>
          <div className="apache-svg">
            <img src={ApacheSvg} alt="" />
          </div>
          <div className="nginx-svg">
            <img src={NginxSvg} alt="" />
          </div>
          <div className="wordpress-svg">
            <img src={WordpressSvg} alt="" />
          </div>
        </div>
        <div className="child-two">
          <div className="html-svg">
            <img src={HtmlSvg} alt="" />
          </div>
          <div className="css-svg">
            <img src={CssSvg} alt="" />
          </div>
          <div className="js-svg">
            <img src={JsSvg} alt="" />
          </div>
          <div className="react-svg">
            <img src={ReactSvg} alt="" />
          </div>
        </div>
      </div>
    </ServicesContainer>
  )
}
