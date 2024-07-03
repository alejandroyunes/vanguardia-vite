import { PortfolioContainer } from "./portfolio.styled";
import Button from "../../components/Button/Button";
import Technologies from "./Technologies/Technologies";
import Github from "../../pages/translate/svgs/portfolio/github";
import { useReadLocalStorage } from "usehooks-ts";
import Website from "../../pages/translate/svgs/portfolio/website";
import { Helmet, HelmetProvider } from "react-helmet-async";

interface PorfolioProps {
  title: string;
  subtitle: string;
  meta: string;
  items: {
    title: string;
    subtitle: string;
    image: string;
    alt: string;
    url: string;
    github: string;
    technologies: string[];
  }[];
}

export default function Portfolio({ items, meta }: PorfolioProps) {
  const lang = useReadLocalStorage("language");
  return (
    <PortfolioContainer>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={meta} />
        </Helmet>
      </HelmetProvider>

      {items.map((e, i) => (
        <div className="portfolio-billboard" key={i}>
          <div className="child-one">
            <div className="item-info">
              <h2>
                <strong>{e.title}</strong>
              </h2>
              <p>{e.subtitle}</p>
            </div>

            <Technologies technologies={e.technologies} />

            <div className="buttons-portfolio">
              <Button
                label={lang === "english" ? "view site" : "ver sitio"}
                category="primary"
                size="sm"
                icon={Website}
                onClick={() => window.open(e.url, "_blank")}
              />
              <div className="portfolio-repo">
                <Button
                  label={lang === "english" ? "view repo" : "ver repo"}
                  icon={Github}
                  onClick={() => window.open(e.github, "_blank")}
                />
              </div>
            </div>
          </div>

          <div className="child-two">
            <img
              className="portfolio-image"
              src={e.image}
              alt={e.alt}
              width="600"
              height="400"
            />
          </div>
        </div>
      ))}
    </PortfolioContainer>
  );
}
