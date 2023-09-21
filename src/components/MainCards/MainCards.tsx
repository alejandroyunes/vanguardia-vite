import { CardContainer, MobileCardContainer, DesktopCardContainer } from "./main-cards.styled";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as CarouselContainer } from 'react-responsive-carousel'
import { cardData } from "./data";

export default function MainCards() {
  const { cards } = cardData

  return (
    <CardContainer>
      <MobileCardContainer>
        <CarouselContainer showThumbs={false}>
          {cards.map((e, i) => {
            return (
              <div className="card-wrapper" key={i}>
                <div className="card-img">
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
        {cards.map((e, i) => {
          return (
            <div className="card-wrapper" key={i}>
              <div className="card-img">
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
      </DesktopCardContainer>
    </CardContainer>
  );
}
