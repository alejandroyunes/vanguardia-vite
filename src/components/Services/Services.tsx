import Title from "../Title/Title"

import HtmlSvg from "./assets/html.svg"
import CssSvg from "./assets/css.svg"
import JsSvg from "./assets/javascript.svg"
import ReactSvg from "./assets/reactsvg.svg"
import NodeSvg from "./assets/node-js.svg"
import WordpressSvg from "./assets/wordpress.svg"
import TypescriptSvg from "./assets/typescript.svg"
import NginxSvg from "./assets/nginx-n.svg"
import ApacheSvg from "./assets/apache.svg"

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
              <e.image />
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
