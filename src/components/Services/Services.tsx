import Title from "../Title/Title"

import HtmlSvg from "../../assets/html.svg"
import CssSvg from "../../assets/css.svg"
import JsSvg from "../../assets/javascript.svg"
import ReactSvg from "../../assets/reactsvg.svg"
import NodeSvg from "../../assets/node-js.svg"
import WordpressSvg from "../../assets/wordpress.svg"
import TypescriptSvg from "../../assets/typescript.svg"
import NginxSvg from "../../assets/nginx-n.svg"
import ApacheSvg from "../../assets/apache.svg"
import WebDesign from '../MainDesignSection/Assets/WebDesign/WebDesign'
import DigitalMarketing from "../MainDesignSection/Assets/DigitalMarketing/DigitalMarketing"
import Branding from "../MainDesignSection/Assets/Branding/Branding"
import { ServicesContainer } from "./services.styled"

export default function Services() {
  return (
    <ServicesContainer>
      <Title message={"Servicios"} title={""} />

      <div className="subtitle">
        <p>Somos una empresa especializada en diseño y desarrollo web que se dedica a la creación de sitios web altamente efectivos para marcas y startups líderes en la industria en Medellín y el mundo. Nuestros proyectos se enfocan en generar tráfico, fomentar la participación y aumentar las conversiones.</p>
      </div>

      <div className="services-three-columns">
        <div className="child-one">
          <div className="design-svg">
            <WebDesign />
          </div>
          <h4>Web Design</h4>
          <p>
            Creamos páginas web, tiendas virtuales, blogs, landing pages y plantillas de alta calidad.
          </p>
        </div>
        <div className="child-two">
          <div className="design-svg">
            <DigitalMarketing />
          </div>
          <h4>Marketing Digital</h4>
          <p>
            Diseñamos estrategias para potenciar la presencia de tu marca en línea y generar un impacto significativo en Internet.
          </p>
        </div>
        <div className="child-three">
          <div className="design-svg-2">
            <Branding />
          </div>
          <h4>Branding / Marca</h4>
          <p>
            Diseñamos y estructuramos la identidad de tu marca para que perdure en el tiempo.
          </p>
        </div>
      </div>
      <br />

      <Title message={"Tecnologías"} title={""} />

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