import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

//styles
import { LoginButtonContainer, LoginContainer} from './styles'

//services
import { api } from '../../../services/api'
import { handleSendErr } from '../../../services/sendError'

//context
import { User } from '../../../context/UserContext'

const LoginSchema = yup.object().shape({
  email: yup.string().required('Email required'),
  password: yup
    .string()
    .required('Password required')
    .min(6, 'Minimum 6 characters'),
})

export function LoginButton() {
  const [loginOpen, setLoginOpen] = useState(false)
  const { userLogIn } = User()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  })

  const handleLogIn = async (value) => {
    try {
      await api
        .post(
          '/auth/local',
          {
            identifier: value.email,
            password: value.password,
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
            },
          }
        )
        .then((response) => {
          // Handle success.
          const { data } = response
          userLogIn(data)
          setLoginOpen(false)
          toast.success(`Welcome ${data.user.firstName}`)
        })
        .catch((error) => {
          // Handle error.
          if(error.message === 'Network Error'){
            handleSendErr(error)
          } else {
            const { data } = error.response
            if (data.error) {
              if (
                data.message[0].messages[0].message ===
                'Identifier or password invalid.'
              ) {
                toast.error('E-mail or password incorrect')
              } else if (
                data.message[0].messages[0].id === 'Auth.form.error.confirmed'
              ) {
                toast.error('Confirm your email bedore continuing')
              } else {
                toast.error('E-mail or password incorrect')
              }
            }
          }
        })
      } catch (err) {
      handleSendErr(err)
    }
  }
  return (
    <LoginContainer>
      <LoginButtonContainer onClick={() => setLoginOpen(!loginOpen)}>
        Log in
      </LoginButtonContainer>
      <form
        style={{ display: loginOpen ? 'flex' : 'none' }}
        onSubmit={handleSubmit(handleLogIn)}
      >
        <input {...register('email')} type='email' placeholder='Email' />
        {errors.email ? <span>{errors.email.message}</span> : ''}
        <input
          {...register('password')}
          type='password'
          placeholder='Password'
        />
        {errors.password ? <span>{errors.password.message}</span> : ''}
        <button type='submit'>Log In</button>
      </form>
    </LoginContainer>
  )
}
