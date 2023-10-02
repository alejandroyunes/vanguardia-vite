import { useReadLocalStorage } from "usehooks-ts";
import Services from "../components/Services/Services"
import { english, spanish } from "./translate/services";

export default function index() {

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english
  
  return (
    <Services {...language} />
  )
}