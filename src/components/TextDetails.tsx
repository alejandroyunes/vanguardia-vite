import React from "react";
import laptopImage from "../images/laptop-half.png";
export default function TextDetails() {
  return (
    <>
      <div className="center-content">
        <h1>Let's talk product.</h1>
        
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        
        <div className="half-laptop">
          <img src={laptopImage} className="half-laptop-image" />
        </div>
      </div>
    </>
  );
}
