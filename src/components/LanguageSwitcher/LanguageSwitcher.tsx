import { useLocalStorage } from "usehooks-ts"
import { LanguageContainer } from "./language-switcher.styled"

export default function LanguageSwitcher() {

  const [lang, setLang] = useLocalStorage('language', 'spanish')

  return (
    <LanguageContainer>
      {lang === 'spanish' ?
      <span onClick={() => setLang('english')}>EN</span>
      :
      <span onClick={() => setLang('spanish')}>ES</span>}
    </LanguageContainer>
  )
}
