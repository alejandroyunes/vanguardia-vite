import Animation from "./animation";
import { BillboardContainer } from "./billboard.styled";

export default function Billboard() {
  return (
    <>
      <BillboardContainer>
        <div className="billboard-title">
          <h1>
            Construimos Experiencias Web Asombrosas
          </h1>
          <h2>
          Somos una agencia digital líder con amplia experiencia en diseño y desarrollo. Nos especializamos en la creación de productos móviles y web para plataformas comerciales de alta complejidad.
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
