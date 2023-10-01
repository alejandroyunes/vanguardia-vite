import { useReadLocalStorage } from "usehooks-ts"
import About from "../components/About/devs/About"
import { english, spanish } from "./translate/about"

export default function index() {

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english
  
  return (
    <About {...language.aboutUs} />
  )
}
