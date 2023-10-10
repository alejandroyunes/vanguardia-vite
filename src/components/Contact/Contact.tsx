import { ContactContainer, ContactFormContainer, ContactMessage } from "./contact.styled"
import ContactForm from "../ContactForm/ContactForm"
import { useReadLocalStorage } from "usehooks-ts"
import { english, spanish } from "../ContactForm/translate"

export default function Contact() {

  const lang = useReadLocalStorage('language')
  const language = lang === 'spanish' ? spanish : english

  return (
    <ContactContainer>
      <ContactMessage>
        <h1>{language.contactTitle}</h1>
        <p>{language.contactSubtitle}</p>
      </ContactMessage>
      <ContactFormContainer>
        <ContactForm {...language} />

      </ContactFormContainer>
    </ContactContainer>
  )
}