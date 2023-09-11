import { FC, useEffect, useState } from "react"
import MailOutlineIcon from "./svgs/email"
import PhoneAndroidIcon from "./svgs/phone"
import InstagramIcon from "./svgs/instagram"
import TwitterIcon from "./svgs/twitter"
import FacebookIcon from "./svgs/facebook"
import GitHubIcon from "./svgs/github"
import WeatherSpinner from './WeatherIcons/WeatherSpinner/WeatherSpinner'
import Thunder from './WeatherIcons/Thunder/Thunder'
import DrizzleDay from './WeatherIcons/Drizzle/Day/DrizzleDay'
import DrizzleNight from './WeatherIcons/Drizzle/Night/DrizzleNight'
import Rain from './WeatherIcons/Rain/Rain'
import Snow from './WeatherIcons/Snow/Snow'
import LocationOnIcon from './svgs/location'

import ClearNight from './WeatherIcons/NightClear/ClearNight'
import ClearDay from './WeatherIcons/DayClear/ClearDay'
import CloudsDay from './WeatherIcons/Clouds/Day/CloudsDay'
import CloudsNight from './WeatherIcons/Clouds/Night/CloudsNight'
import Mist from './WeatherIcons/Mist/Mist'

import { FooterContainer } from './Footer.styled'

const Footer: FC = () => {

  const key = '3a306e66fcf53df61a19eb62070a3d84';

  const [description, setDescription] = useState('');
  const [main, setMain] = useState('');
  const [time, setTime] = useState(0);


  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Medellín,co&APPID=' + key + '&units=metric')
      .then(res => res.json())
      .then(data => {
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
      })
  }, [])

  useEffect(() => {
    let today = new Date();
    let time = today.getHours();
    setTime(time)
  }, [])

  return (
    <FooterContainer id="contact"> 
      <div className="footer-child-one">
        <h1>Nuestra Oficina</h1>
        <h2>Agencia digital líder con sólida experiencia en diseño y desarrollo.</h2>
        <div className="climate-data">
          <div className="climate-data-one">
            <h3>El clima en Medellín:</h3>
          </div>
          <div className="climate-data-two">
            {(() => {
              switch (main) {
                case "Thunderstorm": return <Thunder />;
                case "Drizzle": return (time >= 6 && time < 18 ? <DrizzleDay /> : <DrizzleNight />);
                case "Rain": return <Rain />;
                case "Snow": return <Snow />;
                case "Clear": return (time >= 6 && time < 18 ? <ClearDay /> : <ClearNight />);
                case "Clouds": return (time >= 6 && time < 18 ? <CloudsDay /> : <CloudsNight />);
                case "Mist" || "Smoke" || "Haze" || "Dust" || "Fog" || "Sand" || "Ash" || "Squall" || "Tornado": return <Mist />;
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
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="footer-child-two">
        <form>
          <input
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Nombre"
          />
          <input
            name="email"
            type="text"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            name="text"
            className="feedback-input"
            placeholder="Comentario"
          ></textarea>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </FooterContainer>
  )
}
export default Footer;
