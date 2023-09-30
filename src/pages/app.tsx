import MainDesign from "../components/MainDesignSection/MainDesign"
import MainCards from "../components/MainCards/MainCards"
import Billboard from "../components/Billboard/Billboard"
import Title from "../components/Title/Title"
import BillboardTwo from "../components/BillboardTwo/BillboardTwo"
import { useReadLocalStorage } from "usehooks-ts"
import { english, spanish } from "./translate/app"

export default function App() {

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english
  
  return (
    <>
      <Billboard {...language.billboard} />
      <Title title={language.titleOne.title} message={language.titleOne.message} />
      <MainCards cards={[...language.mainCards]} />
      <BillboardTwo {...language.billboardTwo}/>
      <Title title={language.titleTwo.title} message={language.titleTwo.message} />
      <MainDesign />
    </>
  );
}
