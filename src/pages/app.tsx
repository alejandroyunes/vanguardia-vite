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
      <Title title="Tecnologías" message="La Era Móvil" />
      <MainCards />
      <BillboardTwo />
      <Title title="Diseñado para todos los dispositivos" message="Diseños Creativos" />
      <MainDesign />
    </>
  );
}
