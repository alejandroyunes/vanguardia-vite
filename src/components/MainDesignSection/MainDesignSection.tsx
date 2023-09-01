import React from "react";
import ResponsiveDesignIcon from "../../images/responsive-design-icon.svg";
import WhiteMountains from "../../images/white-mountains.jpg";
import GreenDesign from "../../images/green-design-mockup.jpg";
import CellphoneColorful from "../../images/cellphones.colorful.jpg";
import OneHandHoldingCellphone from "../../images/one-hand-holding-cellphonee.jpg";

import HandsHoldingTablet from "../../images/hands-holding-tablet.jpg";

export const MainDesignSection = () => {
  return (
    <>
      <div className="design__section">
        <div className="design__section__title">
          <h6>Portfolio</h6>
        </div>

        <div className="design__section__subtitle">
          <h6>Creative Interface Design</h6>
        </div>

        <div className="design__section__line">
          <h6>___</h6>
        </div>



        <div className="design__section__container">

          <div className="design__section__container__half">
              <img  src={HandsHoldingTablet}/>
          </div>
            

             <div className="design__section__container__half">

            
            <div>
                <div className="design__section__container__half__top__left">
                  <img src={OneHandHoldingCellphone} />
                </div>

                <div className="design__section__container__half__bottom__left">
                  <img src={WhiteMountains} />
                </div>
            </div>

            <div>
            <div className="design__section__container__half__top__right">
                  <img src={GreenDesign} />
                </div>
                <div className="design__section__container__half__bottom__right">
                  <img src={CellphoneColorful} /> 
                </div>
            </div>
            </div>
         
        </div>
      </div>
    </>
  );
};
