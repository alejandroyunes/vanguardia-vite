import WhiteMountains from "./Assets/white-mountains.jpg";
import GreenDesign from "./Assets/green-design-mockup.jpg";
import Rocket from './Assets/Rocket'
import GirlFloating from './Assets/GirlFloating/GirlFloating'
import MiniVan from "./Assets/minivan-design.jpg";

import { MainSectionDesignContainer } from "./main-design-section.styled"

export const MainDesignSection = () => {
  return (
    <MainSectionDesignContainer>
        <div className="grid__image-gallery">
          <div className="image-gallery-box-one">
            <img src={MiniVan} alt="" />
          </div>
          <div className="image-gallery-box-two">
            <Rocket />
          </div>
          <div className="image-gallery-box-three">
            <img src={WhiteMountains} alt="" />
          </div>
          <div className="image-gallery-box-four">
            <img src={GreenDesign} alt="" />
          </div>
          <div className="image-gallery-box-five">
            {/* <img src={CellphoneColorful} /> */}
            <GirlFloating />
          </div>
        </div>
    </MainSectionDesignContainer>
  );
};
