import { CardContainer, MobileCardContainer, DesktopCardContainer } from "./main-cards.styled";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as CarouselContainer } from 'react-responsive-carousel'

interface MainCardProps {
  cards: {
    image: string
    alt: string
    title: string
    subtitle: string
    message: string
    viewMore: boolean
  }[]
}
export default function MainCards(props: MainCardProps) {
  const { cards } = props

  return (
    <CardContainer>
      <MobileCardContainer>
        <CarouselContainer showThumbs={false}>
          {cards.map((e, i) => {
            return (
              <div className="card-wrapper" key={i}>
                <div className="card-img">
                  <img src={e.image} alt={e.alt} width="100" height="100" />
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
                <img src={e.image} alt={e.alt} width="100" height="100" />
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
