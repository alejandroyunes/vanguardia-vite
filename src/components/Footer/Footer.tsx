import FacebookIcon from "./svgs/facebook"
import GitHubIcon from "./svgs/github"
import InstagramIcon from "./svgs/instagram"
import LocationOnIcon from './svgs/location'
import MailOutlineIcon from "./svgs/email"
import PhoneAndroidIcon from "./svgs/phone"
import TwitterIcon from "./svgs/twitter"

import { FooterContainer } from './Footer.styled'

import Weather from "../weather"
import ContactForm from "./ContactForm/ContactForm"

export default function Footer() {

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

            <Weather />
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
        <ContactForm />
      </div>

    </FooterContainer>
  )
}
