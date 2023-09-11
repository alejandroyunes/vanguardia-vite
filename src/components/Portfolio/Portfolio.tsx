// import linkedin from ".././../assets/people/alejo-developer.png"
import { PortfolioContainer } from "./portfolio.styled"
import portfolioRestaurant from "../../assets/portfolio/portfolio-restaurant.jpg"
import iphoneCase from "../../assets/portfolio/iphone.jpg"
// import rdsWebsite from "../../assets/portfolio/rds.jpg";
import drPuerta from "../../assets/portfolio/drpuerta.jpg"
import hotels from "../../assets/portfolio/hotels.jpg"
// import forVegans from "../../assets/portfolio/forvegans.jpg";
import punkies from "../../assets/portfolio/punkies2.jpg"
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
// import WorkOutlineIcon from '../Footer/svgs/email'
import Suitcase from "./svgs/suitcase";

export default function Portfolio() {
  return (
    <>
      <Title message={"Portafolio"} title={""} />
      <PortfolioContainer>
        <div className="portfolio-billboard">
          <div className="portfolio-billboard-child-one">
            <h1>Punkies y Cerebro</h1>
            <h2>
              Desarrollamos una página web con tecnologías de vanguardia: Next.js, Heroku, Strapi y MongoDB. Nuestro enfoque incluye un diseño original y altamente adaptable, asegurando que tu sitio sea completamente responsive en cualquier dispositivo. Además, nos ocupamos de gestionar las licencias de todas las imágenes utilizadas, garantizando la legalidad y la calidad de los recursos visuales en tu proyecto.
            </h2>
            <div className="buttons">
              <Button
                label="Ver Sitio"
                category="primary"
                size="sm"
                icon={Suitcase}
                onClick={() =>
                  window.open("https://punkiesycerebro.com", "_blank")
                }
              />
            </div>
          </div>
          <div className="portfolio-billboard-child-two">
            <img src={punkies} alt="" />
          </div>
        </div>
        <div className="portfolio-billboard-two">
          <div className="portfolio-billboard-two-child-one">
            <img src={drPuerta} alt="" />
          </div>
          <div className="portfolio-billboard-two-child-two">
            <div>
              <h1>Dr. Puerta</h1>
              <h2>
              Te presentamos nuestro Landing Page desarrollado en Next.js, caracterizado por un diseño original y altamente adaptable. Este sitio web está meticulosamente creado para garantizar una experiencia totalmente responsive en cualquier dispositivo. Además, hemos adquirido una Licencia Premium de imágenes que te permite utilizarlas de manera ilimitada y sin necesidad de atribución, asegurando la excelencia visual de tu proyecto.
              </h2>
              <div className="buttons">
                <Button
                  label="Ver Sitio"
                  category="primary"
                  size="sm"
                  icon={Suitcase}
                  onClick={() => window.open("https://drpuerta.com", "_blank")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-billboard">
          <div className="portfolio-billboard-child-one">
            <h1>Experiencia Japonesa</h1>
            <h2>
            Nuestro último estudio de caso presenta una página web desarrollada utilizando únicamente HTML, CSS y JavaScript vanilla. Se destaca por su diseño original y una adaptabilidad total, asegurando una experiencia óptima en cualquier dispositivo. Además, hemos adquirido una Licencia Premium de imágenes que permite un uso ilimitado sin necesidad de atribución, garantizando la calidad visual excepcional en tu proyecto.
            </h2>
            <div className="buttons">
              <Button
                label="Ver Sitio"
                category="primary"
                size="sm"
                icon={Suitcase}
                onClick={() =>
                  window.open(
                    "https://capable-creponne-253cb7.netlify.app/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div className="portfolio-billboard-child-two">
            <img src={portfolioRestaurant} alt="" />
          </div>
        </div>
        <div className="portfolio-billboard-two">
          <div className="portfolio-billboard-two-child-one">
            <img src={iphoneCase} alt="" />
          </div>
          <div className="portfolio-billboard-two-child-two">
            <h1>iPhone 13</h1>
            <h2>
              Otro emocionante estudio de caso nos presenta una página web creada con habilidades en HTML, CSS y JavaScript vanilla. Esta página se caracteriza por su diseño auténtico y una adaptabilidad completa, garantizando una experiencia excepcional en cualquier dispositivo. Además, hemos obtenido una Licencia Premium de imágenes que permite un uso ilimitado sin requerir atribución, asegurando una calidad visual de primera categoría en tu proyecto.
            </h2>
            <div className="buttons">
              <Button
                label="Ver Sitio"
                category="primary"
                size="sm"
                icon={Suitcase}
                onClick={() =>
                  window.open(
                    "https://gentle-bonbon-985a86.netlify.app/",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="portfolio-billboard">
          <div className="portfolio-billboard-child-one">
            <h1>Hotels.com</h1>
            <h2>
              Study case: Página en HTML, CSS, JavaScript vanilla. Diseño
              original y responsive. Licencia Premium de imagenes (uso ilimitado
              sin atribución)
            </h2>
            <div className="buttons">
              <Button
                label="Ver Sitio"
                category="primary"
                size="sm"
                icon={Suitcase}
                onClick={() =>
                  window.open(
                    "https://hoteles-react.netlify.app/Rooms",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
          <div className="portfolio-billboard-child-two">
            <img src={hotels} alt="" />
          </div>
        </div>
      </PortfolioContainer>
    </>
  )
}