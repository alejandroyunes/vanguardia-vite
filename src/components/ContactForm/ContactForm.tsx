import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import ReCAPTCHA from "react-google-recaptcha"
import useCommentApi from "./api/useCommentApi"
import { useState, useTransition } from "react"

export default function contactForm() {

  const [contacted, setContacted] = useState(false)
  const [recaptchaValid, setRecaptchaValid] = useState(false)
  const [_isPending, startTransition] = useTransition()
  const { postFetch } = useCommentApi()

  const schema = yup.object({
    name: yup.string().max(20, 'El nombre debe tener un máximo de 20 caracteres').required('Este campo es obligatorio'),
    email: yup.string().email('Este campo debe ser un email').max(30).required('Este campo es obligatorio'),
    message: yup.string().max(150, 'El comentario debe tener un máximo de 150 caracteres').required('Este campo es obligatorio'),
  }).required()

  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: any) => {
    postFetch(data)
    setContacted(true)
    reset()
  }

  const handleRecaptcha = (recaptchaValue: string | null) => {
    if (typeof recaptchaValue === 'string') {
      setRecaptchaValid(true);
    } else {
      setRecaptchaValid(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Nombre</label>
      <input {...register("name")} placeholder="Nombre" />
      <p className="error">{errors.name?.message}</p>

      <input {...register("email")} placeholder="Email" type="email" />
      <p className="error">{errors.email?.message}</p>

      <textarea {...register("message")} placeholder="Comentarios, dudas o sugerencias" />
      <p className="error">{errors.message?.message}</p>

      <div className='submit-section'>
        <div className='submit-button'>

          <button className={!isValid || !recaptchaValid ? 'invalid' : ''} type='submit' disabled={!recaptchaValid}>
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
