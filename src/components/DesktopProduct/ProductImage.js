import React from "react";
import backgroundImage from "../../images/laptopbackground.png";
import backgroundLaptop from "../../images/laptopmega.png";
import backgroundCellphone from "../../images/start_img1-4@2x.png";

export default function Products() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src={backgroundImage} />
        <div style={{ position: "absolute", top: "0px" }}>
          <img src={backgroundLaptop} />
        </div>
        <div style={{ position: "absolute", top: "0px" }}>
          <img src={backgroundCellphone} />
        </div>
      </div>
    </div>
  );
}
