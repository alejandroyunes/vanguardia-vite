import { ThemeProvider } from "styled-components"
import { darkTheme } from "../styles/themes/darkTheme"
import { useLocalStorage } from "usehooks-ts"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routerConfig from './routes/index.tsx'
import { GlobalStyle } from "../styles/themes/GlobalStyle.tsx"
import Header from "../components/Header/Header.tsx"
import Footer from '../components/Footer/Footer.tsx'

export default function VanguardiaApp() {
	const [theme] = useLocalStorage("theme", darkTheme)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Router>
				<Header />
				<Routes>
					{routerConfig.map((route, index) => (
						<Route key={index} path={route.path} element={route.element} errorElement={route.errorElement}/>
					))}
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	)
}
