import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/themes/darkTheme"
import { useLocalStorage } from "usehooks-ts"
import { RouterProvider } from "react-router-dom"
import router from './routes/index.tsx'
import { GlobalStyle } from "../styles/themes/GlobalStyle.tsx"
import Header from "../components/Header/Header.tsx"
import Footer from '../components/Footer/Footer.tsx'

export default function VanguardiaApp() {
	const [theme] = useLocalStorage("theme", darkTheme)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<RouterProvider router={router} />
			<Footer />
		</ThemeProvider>
	)
}