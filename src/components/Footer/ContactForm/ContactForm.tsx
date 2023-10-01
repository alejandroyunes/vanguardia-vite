import { useState, useTransition, useRef } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import ReCAPTCHA from "react-google-recaptcha"
import useCommentApi from "./hooks/useCommentApi"
import { FooterProps } from "../Footer"

type ContactProps = Pick<FooterProps['contact'], 'name' | 'email' | 'comment' | 'button' | 'required' | 'nameValid' | 'emailValid' | 'commentValid' | 'langRecaptcha'>;

export default function contactForm(props: ContactProps) {

  const {name, email, comment, button, required, nameValid, emailValid, commentValid, langRecaptcha } = props

  const [contacted, setContacted] = useState(false)
  const [recaptchaValid, setRecaptchaValid] = useState(false)
  const [_isPending, startTransition] = useTransition()
  const { postFetch } = useCommentApi()
  const recaptcharef = useRef<ReCAPTCHA>(null);

  const schema = yup.object({
    name: yup.string().max(25, nameValid).required(required),
    email: yup.string().email(emailValid).max(30).required(required),
    message: yup.string().max(150, commentValid).required(required),
  }).required()

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    postFetch(data)
    setContacted(true)
    reset()
    recaptcharef.current?.reset()
  }

  const handleRecaptcha = (recaptchaValue: string | null) => {
    setRecaptchaValid(typeof recaptchaValue === 'string')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder={name} />
      <p className="error">{errors.name?.message}</p>

      <input {...register("email")} placeholder={email} type="email" />
      <p className="error">{errors.email?.message}</p>

      <textarea {...register("message")} placeholder={comment} />
      <p className="error">{errors.message?.message}</p>

      <div className='submit-section'>
        <div className='submit-button'>

          <button className={!isValid || !recaptchaValid ? 'invalid' : ''} type='submit' disabled={!recaptchaValid}>
            {button}
          </button>

        </div>
        <div className='recaptcha'>
          <div className='google-recaptcha'>
            <ReCAPTCHA
              ref={recaptcharef}
              sitekey={import.meta.env.VITE_RECAPTCHA ?? '123'}
              onChange={handleRecaptcha}
              theme={'dark'}
              hl={langRecaptcha ? 'es' : 'en'}
            />
          </div>
        </div>
        {contacted ?
          <div id='slide'>
            <div
              className="close"
              onClick={() => {
                startTransition(() => {
                  setContacted(false)
                })
              }}>
              <span ></span>
              <span ></span>
            </div>
            <p>Gracias, responderemos lo más pronto posible 🚀</p>
          </div>
          : null}
      </div>
    </form>
  )
}

