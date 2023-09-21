import { useEffect, useState, useRef } from "react"

export default function useWeather() {
	const [weather, setWeather] = useState('')
	const didMount = useRef(false)

	const getWeather = async () => {
		try {
			const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Medellín,co&APPID=${import.meta.env.VITE_WEATHER}&units=metric`);

			if (!data.ok) {
				throw new Error(`Error fetching weather: ${data.status}`);
			}

			const result = await data.json()
			setWeather(result.weather[0].main)
		} catch (error) {
			console.log('error in catch useWeather', error)
		}
	}

	useEffect(() => {
		if (!didMount.current) {
			didMount.current = true
			getWeather()
		}
	})

	return {
		weather
	}
}