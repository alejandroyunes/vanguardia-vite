import WhiteMountains from "./Assets/white-mountains.jpg"
import GreenDesign from "./Assets/green-design-mockup.jpg"
import Rocket from './Assets/Rocket'
import GirlFloating from './Assets/GirlFloating/GirlFloating'
import MiniVan from "./Assets/minivan-design.jpg"
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
