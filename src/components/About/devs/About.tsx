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
          <p>
            <strong>
              {title}
            </strong>
          </p>
        </div>
        <div className="about-image">
          <img className="about-logo" src={linkedin} alt={alt} />
        </div>
      </div>

      <div className="about-subtitle">
        <p>
          <strong>
            {subtitle}
          </strong>
        </p>
      </div>
    </AboutContainer>
  )
}