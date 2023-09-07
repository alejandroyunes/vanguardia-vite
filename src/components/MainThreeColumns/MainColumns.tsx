import ResponsiveDesignIcon from "../../images/responsive-design-icon.svg";
import MobileDesignIcon from "../../images/mobile-design-icon.svg";
import RocketAnimation from "./rocket-animation.svg"
import { ThreeCardContainer, MobileCardContainer, DesktopCardContainer } from "./three-colums.styled";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as CarouselContainer } from 'react-responsive-carousel'
import { three_columns } from "./data";

export default function MainColumns() {
  return (
    <ThreeCardContainer>
      <MobileCardContainer>
        <CarouselContainer showThumbs={false}>
          {three_columns.cards.map((e, i) => {
            return (
              <div className="three-card__wrapper" key={i}>
                <div className="three-card__img">
                  <img src={e.image} />
                </div>
                <h2>{e.title}</h2>
                <h3>{e.subtitle}</h3>
                <p>
                  {e.message}
                </p>
                {e.viewMore && <h6>view more</h6>}
              </div>
            )
          })}

        </ CarouselContainer >
      </MobileCardContainer>

      <DesktopCardContainer>
        <div className="three-card__wrapper">
          <div className="three-card__img">
            <img src={ResponsiveDesignIcon} />
          </div>
          <h2>Responsive Design</h2>
          <h3>Illustration Gallery</h3>
          <p>
            Leading digital agency with solid design and development
            expertise. We build mobile and web products for startups and
            design intricate trading platforms.
          </p>
          <h6>view more</h6>
        </div>

        <div className="three-card__wrapper">
          <div className="three-card__img">
            <img src={MobileDesignIcon} />
          </div>
          <h2>Mobile Design</h2>
          <h3>Illustration Gallery</h3>
          <p>
            Leading digital agency with solid design and development
            expertise. We build mobile and web products for startups and
            design intricate trading platforms.
          </p>
          <h6>view more</h6>
        </div>

        <div className="three-card__wrapper">
          <div className="three-card__img">
            <img src={RocketAnimation} />
          </div>
          <h2>SEO & Marketing</h2>
          <h3>Illustration Gallery</h3>
          <p>
            Leading digital agency with solid design and development
            expertise. We build mobile and web products for startups and
            design intricate trading platforms.
          </p>
          <h6>view more</h6>
        </div>
      </DesktopCardContainer>
    </ThreeCardContainer>
  );
}
