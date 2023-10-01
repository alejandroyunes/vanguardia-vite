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

export interface FooterProps {
  title: string
  subtitle: string
  label: string,
  contact: {
    name: string
    email: string
    comment: string
    button: string
    nameValid: string
    emailValid: string
    commentValid: string
    required: string
    langRecaptcha: boolean
  }
}

export default function Footer(props: FooterProps) {

  const {title, subtitle, label, contact} = props

  return (
    <FooterContainer id="contact">
      <div className="footer-left">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className="climate-data">
          <div className="climate-data-one">
            <h3>{label}</h3>
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
          <p>Medellín, Colombia</p>
        </div>
        <div className="footer__social">
          <a href="https://www.instagram.com/vanguardiawebtech" target="_blank"><InstagramIcon /></a>
          <a href="https://www.facebook.com/vanguardiawebtech" target="_blank"><FacebookIcon /></a>
          <a href="https://www.twitter.com/vanguardiawebt"><TwitterIcon /></a>
          <a href="https://www.github.com/alejandroyunes" target="_blank"><GitHubIcon /></a>
        </div>
      </div>

      <div className="footer-right">
        <ContactForm {...contact} />
      </div>

    </FooterContainer>
  )
}
