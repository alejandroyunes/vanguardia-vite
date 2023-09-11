import linkedin from ".././../assets/people/alejo-developer.png"
import { AboutContainer } from "./about.styled"

export default function About() {
  return (
    <AboutContainer>
      <div className="about-us-info">
        <div className="about-title">
          <h1>
            Soy un desarrollador autodidacta con más de 4 años de experiencia en JavaScript, TypeScript y React. También tengo varios años de experiencia profesional en el área de IT.
          </h1>
        </div>
        <div className="about-image">
          <img className="about-logo" src={linkedin} alt="" />
        </div>
      </div>

      <div className="about-subtitle">
        <h1>
          Diseño web y móvil altamente personalizado, utilizando tecnologías de última generación como React, Next.js y React Native.
        </h1>
      </div>
    </AboutContainer>
  )
}