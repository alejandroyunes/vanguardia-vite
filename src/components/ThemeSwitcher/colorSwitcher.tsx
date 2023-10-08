import './styles/color-switcher.scss'
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts"
import { darkTheme } from "../../styles/themes/darkTheme"
import { lightTheme } from "../../styles/themes/lightTheme"

export default function ColorSwitcher() {
	const [ theme, setTheme ] = useLocalStorage('theme', darkTheme)

	const spanish = {
		inputLabel: "cambiador de color fondo pantalla",
	}

	const english = {
		inputLabel: "theme switcher",
	}

	const lang = useReadLocalStorage('language');
	const language = lang === 'spanish' ? spanish : english

	return (
		<div className="toggle-input">
			<input
				type="checkbox"
				defaultChecked={theme.name === 'darkmode' ? true : false}
				id="toggler"
				onChange={() => {
					theme.name === 'darkmode' ? setTheme(lightTheme) : setTheme(darkTheme)
				}}
			/>
			<label htmlFor="toggler" className="toggle">
				<span className="star star1"></span>
				<span className="star star2"></span>
				<span className="star star3"></span>
				<span className="star star4"></span>
				<span className="star star5"></span>
				<span className="star star6"></span>
				<span className="handler">
					<span className="crater crater1"></span>
					<span className="crater crater2"></span>
					<span className="crater crater3"></span>
				</span>

				<span className="visually-hidden">{language.inputLabel}</span>
			</label>
		</div>
	)
}