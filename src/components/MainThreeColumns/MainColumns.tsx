import React from "react";
import ResponsiveDesignIcon from "../../images/responsive-design-icon.svg";
import MobileDesignIcon from "../../images/mobile-design-icon.svg";
import SeoDesignIcon from "../../images/seo-design-icon.svg";
import RocketAnimation from "./rocketAnimation"

export default function MainColumns() {
  return (
    <>
        <div className="three__card__container">
          {/* ****************************  one ******************************** */}

          <div className="three__card__container__wrapper">
            
            
              
                  <div className="three__card__container__img__div">
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
          {/* ****************************  two ******************************** */}

          <div className="three__card__container__wrapper">
            <div className="three__card__container__img__div">
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
          {/* ****************************  three ******************************** */}

          <div className="three__card__container__wrapper">
            <div className="three__card__container__img__div">
            <RocketAnimation/>
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

          {/* ****************************  end ******************************** */}
        </div>
    </>
  );
}
