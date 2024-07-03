import linkedin from "./assets/alejo2.webp";
import { AboutContainer } from "./about.styled";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface AboutProps {
  title: string;
  subtitle: string;
  alt: string;
  meta: string;
}

export default function About({ title, subtitle, alt, meta }: AboutProps) {
  return (
    <AboutContainer>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={meta} />
        </Helmet>
      </HelmetProvider>
      <div className="about-us-info">
        <div className="about-title">
          <p>
            <strong>{title}</strong>
          </p>
        </div>
        <div className="about-image">
          <img
            className="about-logo"
            src={linkedin}
            alt={alt}
            width="300"
            height="400"
          />
        </div>
      </div>

      <div className="about-subtitle">
        <p>
          <strong>{subtitle}</strong>
        </p>
      </div>
    </AboutContainer>
  );
}
