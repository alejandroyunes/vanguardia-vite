import { FC, useState } from "react"

import FacebookIcon from "./svgs/facebook"
import GitHubIcon from "./svgs/github"
import InstagramIcon from "./svgs/instagram"
import LocationOnIcon from './svgs/location'
import MailOutlineIcon from "./svgs/email"
import PhoneAndroidIcon from "./svgs/phone"
import TwitterIcon from "./svgs/twitter"

import ClearDay from './WeatherIcons/DayClear/ClearDay'
import ClearNight from './WeatherIcons/NightClear/ClearNight'
import CloudsDay from './WeatherIcons/Clouds/Day/CloudsDay'
import CloudsNight from './WeatherIcons/Clouds/Night/CloudsNight'
import DrizzleDay from './WeatherIcons/Drizzle/Day/DrizzleDay'
import DrizzleNight from './WeatherIcons/Drizzle/Night/DrizzleNight'
import Mist from './WeatherIcons/Mist/Mist'
import Rain from './WeatherIcons/Rain/Rain'
import Snow from './WeatherIcons/Snow/Snow'
import Thunder from './WeatherIcons/Thunder/Thunder'
import WeatherSpinner from './WeatherIcons/WeatherSpinner/WeatherSpinner'

import { FooterContainer } from './Footer.styled'
import ReCAPTCHA from "react-google-recaptcha"

import useWeather from './hooks/useWeather'
import useDate from "./hooks/useDate"
import useCommentApi, { ContactTypes } from "./api/useCommentApi"

const Footer: FC = () => {

  const { weather } = useWeather()
  const { time } = useDate()
  const {postFetch, defaultContactValues} = useCommentApi()


  const [inputValues, setInputValue] = useState<ContactTypes>(defaultContactValues)
  const [contacted, setContacted] = useState(false)
  const [isBtnDisabled, setBtnDisabled] = useState(true)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    postFetch(inputValues)
    setInputValue(defaultContactValues)
    setContacted(true)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { value, name } = e.target
    setInputValue({ ...inputValues, [name]: value })
  }

  const handleRecaptcha = async (recaptcha: string | null) => {
    if (recaptcha) { setBtnDisabled(false) }
  }

  return (
    <FooterContainer id="contact">
      <div className="footer-left">
        <h1>Nuestra Oficina</h1>
        <h2>Agencia digital líder con sólida experiencia en diseño y desarrollo.</h2>
        <div className="climate-data">
          <div className="climate-data-one">
            <h3>El clima en Medellín:</h3>
          </div>
          <div className="climate-data-two">
            {(() => {
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
            })()}
          </div>
        </div>
        <div className="footer__icon">
          <MailOutlineIcon /> <p>alejandroyunes@outlook.com</p>
        </div>
        <div className="footer__icon">
          <PhoneAndroidIcon /> <p>304 669 5598</p>
        </div>
        <div className="footer__icon">
          <LocationOnIcon />
          <p>En algún lugar del mundo</p>
        </div>
        <div className="footer__social">
          <a href="https://www.instagram.com/vanguardiawebtech" target="_blank"><InstagramIcon /></a>
          <a href="https://www.facebook.com/vanguardiawebtech" target="_blank"><FacebookIcon /></a>
          <a href="https://www.twitter.com/vanguardiawebt"><TwitterIcon /></a>
          <a href="https://www.github.com/alejandroyunes" target="_blank"><GitHubIcon /></a>
        </div>
      </div>
      <div className="footer-right">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            value={inputValues.name}
            className={`feedback-input ${inputValues.name === '' ? "feedback-check" : ''}`}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            name="email"
            type="email"
            className={`feedback-input ${inputValues.email === '' ? "feedback-check" : ''}`}
            value={inputValues.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className={`feedback-input ${inputValues.message === '' ? "feedback-check" : ''}`}
            value={inputValues.message}
            onChange={handleChange}
            placeholder="Comentarios, dudas o sugerencias"
          />
          <div className='submit-section'>
            <div className='submit-button'>
              <button
                type='submit'
                disabled={isBtnDisabled}
              >
                Enviar
              </button>
            </div>
            <div className='recaptcha'>
              <div className='google-recaptcha'>
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA ?? '123'}
                  onChange={handleRecaptcha}
                  theme={'dark'}
                  hl={'es'}
                />
              </div>
            </div>
            {contacted ?
              <div id='slide'>
                <div
                  className="close"
                  onClick={() => setContacted(false)}>
                  <span ></span>
                  <span ></span>
                </div>
                <p>Gracias, responderemos lo más pronto posible 🚀</p>
              </div>
              : null}
          </div>
        </form>
      </div>

    </FooterContainer>
  )
}
export default Footer
