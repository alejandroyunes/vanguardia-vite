import Animation from "./animation";
import { BillboardContainer } from "./billboard.styled";

export default function Billboard() {
  return (
    <>
      <BillboardContainer>
        <div className="billboard-title">
          <h1>
            Building Amazing  <br />Web Experiences
          </h1>
          <h2>
            Leading digital agency with solid design and development expertise.
            We build mobile and web products for startups and design intricate
            trading platforms.
          </h2>
          <div className="billboard-email">
            <input type="text" placeholder="Email address" name="mail" />
            <input type="submit" value="Submit" />
          </div>
        </div>

        <div className="billboard-svg">
          <Animation />
        </div>

      </BillboardContainer>

    </>
  );
}
