import linkedin from "./assets/web-design.webp"
import { AboutContainer } from "./about.styled"

interface AboutProps {
  title: string
  subtitle: string
  alt: string
}

export default function About({ title, subtitle, alt }: AboutProps) {
  return (
    <AboutContainer>
      <div className="about-us-info">
        <div className="about-title">
          <h1>
            {title}
          </h1>
        </div>
        <div className="about-image">
          <img className="about-logo" src={linkedin} alt={alt} />
        </div>
      </div>

      <div className="about-subtitle">
        <h2>
          {subtitle}
        </h2>
      </div>
    </AboutContainer>
  )
}