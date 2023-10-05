import FacebookIcon from "./svgs/facebook"
import GitHubIcon from "./svgs/github"
import InstagramIcon from "./svgs/instagram"
import LocationOnIcon from './svgs/location'
import MailOutlineIcon from "./svgs/email"
import PhoneAndroidIcon from "./svgs/phone"
import TwitterIcon from "./svgs/twitter"

import { FooterContainer } from './Footer.styled'

export interface FooterProps {
  title: string
  subtitle: string
  label: string,
}

export default function Footer(props: FooterProps) {

  const { title, subtitle } = props

  return (
    <FooterContainer>
      <div className="footer-left">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>

      <div className="footer-right">

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

    </FooterContainer>
  )
}
