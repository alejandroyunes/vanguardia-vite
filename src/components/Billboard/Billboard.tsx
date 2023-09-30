import { useReadLocalStorage } from "usehooks-ts";
import Animation from "./animation";
import { BillboardContainer } from "./billboard.styled";
import { spanish, english } from "./translate";

export default function Billboard() {
  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english

  return (
    <BillboardContainer>
      <div className="billboard-title">
        <h1>
          {language.title}
        </h1>
        <h2>
          {language.subtitle}
        </h2>
        <div className="billboard-email">
          <a href="#contact">{language.button}</a>
        </div>
      </div>

      <div className="billboard-svg">
        <Animation />
      </div>

    </BillboardContainer>
  );
}
