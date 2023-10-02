import WhiteMountains from "./Assets/images/white-mountains.webp"
import GreenDesign from "./Assets/images/green-design-mockup.webp"
import Rocket from "./Assets/svgs/rocket/Rocket"
import GirlFloating from './Assets/svgs/GirlFloating'
import MiniVan from './Assets/images/minivan-design.webp'
import { MainDesignContainer } from "./main-design.styled"

export default function MainDesign() {
  return (
    <MainDesignContainer>
      <div className="image-one">
        <img src={MiniVan} alt="" />
      </div>
      <div className="image-two">
        <Rocket />
      </div>
      <div className="image-three">
        <img src={WhiteMountains} alt="" />
      </div>
      <div className="image-four">
        <img src={GreenDesign} alt="" />
      </div>
      <div className="image-five">
        <GirlFloating />
      </div>
    </MainDesignContainer>
  )
}
