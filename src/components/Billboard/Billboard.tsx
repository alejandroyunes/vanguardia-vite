import React from "react";

import Animation from "../animation";

export default function Billboard() {
  return (
    <>

      <div className="showcase__content">
        

        <div className="showcase__content__title">
          <h1>
            Building Amazing  <br />Web Experiences
          </h1>
          <h2>
            Leading digital agency with solid design and development expertise.
            We build mobile and web products for startups and design intricate
            trading platforms.
          </h2>
          <div className="showcase__content__email">
              <input type="text" placeholder="Email address" name="mail" />
            <input type="submit" value="Submit" />
          </div>
        </div>

        <div className="showcase__content__svg">
          <Animation />
        </div>

      </div>


     
      
    </>
  );
}
