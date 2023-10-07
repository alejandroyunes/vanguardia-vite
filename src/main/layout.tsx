import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/themes/darkTheme.tsx"
import { useLocalStorage } from "usehooks-ts"

import { GlobalStyle } from "../styles/themes/GlobalStyle.tsx"
import Header from "../components/Header/Header.tsx"
import Footer from '../components/Footer/Footer.tsx'
import { spanish, english } from "./translate.ts"
import { useReadLocalStorage } from "usehooks-ts"

export default function VanguardiaApp() {

	const [theme] = useLocalStorage('theme', darkTheme)
	const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header headerProps={language.headerProps} />
			<Footer {...language.footer}/> 
		</ThemeProvider>
	)
}
