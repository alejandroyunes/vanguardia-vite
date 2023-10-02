import { useReadLocalStorage } from "usehooks-ts";
import Portfolio from "../components/Portfolio/Portfolio";
import { english, spanish } from "./translate/portfolio";

export default function index() {

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english
  return (
    <Portfolio {...language} />
  )
}
