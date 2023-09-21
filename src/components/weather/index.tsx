import ClearDay from './icons/DayClear/ClearDay'
import ClearNight from './icons/NightClear/ClearNight'
import CloudsDay from './icons/Clouds/Day/CloudsDay'
import CloudsNight from './icons/Clouds/Night/CloudsNight'
import DrizzleDay from './icons/Drizzle/Day/DrizzleDay'
import DrizzleNight from './icons/Drizzle/Night/DrizzleNight'
import Mist from './icons/Mist/Mist'
import Rain from './icons/Rain/Rain'
import Snow from './icons/Snow/Snow'
import Thunder from './icons/Thunder/Thunder'
import WeatherSpinner from './icons/WeatherSpinner/WeatherSpinner'
import useWeather from '../Footer/hooks/useWeather'
import useDate from "../Footer/hooks/useDate"

export default function Weather() {

  const { weather } = useWeather()
  const { time } = useDate()

  switch (weather) {
    case "Thunderstorm": return <Thunder />
    case "Drizzle": return (time >= 6 && time < 18 ? <DrizzleDay /> : <DrizzleNight />)
    case "Rain": return <Rain />
    case "Snow": return <Snow />
    case "Clear": return (time >= 6 && time < 18 ? <ClearDay /> : <ClearNight />)
    case "Clouds": return (time >= 6 && time < 18 ? <CloudsDay /> : <CloudsNight />)
    case "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Ash" || "Squall" || "Tornado": return <Mist />
    default: return <WeatherSpinner />
  }
}