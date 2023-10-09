import MainDesign from "../components/MainDesignSection/MainDesign"
import MainCards from "../components/MainCards/MainCards"
import Billboard from "../components/Billboard/Billboard"
import Title from "../components/Title/Title"
import BillboardTwo from "../components/BillboardTwo/BillboardTwo"
import { useReadLocalStorage } from "usehooks-ts"
import { english, spanish } from "./translate/app"
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {
  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={language.meta} />
        </Helmet>
      </HelmetProvider>
      <Billboard {...language?.billboard} />
      <Title title={language.titleOne.title} message={language.titleOne.message} />
      <MainCards mainCards={language.mainCards} />
      <BillboardTwo {...language.billboardTwo} />
      <Title title={language.titleTwo.title} message={language.titleTwo.message} />
      <MainDesign {...language.mainDesign} />
    </>
  );
}
