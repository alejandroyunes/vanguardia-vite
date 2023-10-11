import { useReadLocalStorage } from "usehooks-ts"
import Alejandro from "../components/Alejandro/Alejandro"
import { english, spanish } from "./translate/alejandro"

export default function AlejandroPage() {

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english

  return <Alejandro {...language.aboutMe} />
}