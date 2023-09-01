import React from "react";
import cellphoneImage from "../../images/cellphone.png";
import Products from "../DesktopProduct/Products";

export default function CellphoneProduct() {
  return (
    <>
      <Products />
      
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="green-column">Some Text in Column One</div>
          </div>
          <div class="column">
            <div
              style={{
                minWidth: "100px",
                maxWidth: "250px",
                margin: "0 auto",
                paddingTop: "40px",
              }}
            >
              <img src={cellphoneImage} />
            </div>
          </div>
          <div class="column">
            <div class="orange-column">Some Text in Column Three</div>
          </div>
        </div>
      </div>
    </>
  );
}
