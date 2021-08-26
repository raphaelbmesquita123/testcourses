import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import Modal from 'react-modal'
import { FaWindowClose } from 'react-icons/fa'
import ReCAPTCHA from 'react-google-recaptcha'

//styles
import { SignUpContainer, SignUpModal, SignUpModalContainer } from './styles'

//services
import { api } from '../../../services/api'
import { handleSendErr } from '../../../services/sendError'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'var(--blue-500)',
  },
  overlay: {
    background:
      'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(233,233,233,0.5) 100%)',
    zIndex: 6,
  },
}

const SignUpSchema = yup.object().shape({
  firstName: yup.string().required('First Name required'),
  lastName: yup.string().required('Last Name required'),
  email: yup.string().required('Email required'),
  password: yup
    .string()
    .required('Password required')
    .min(6, 'Minimum 6 characters'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

export function SignUpButton() {
  const [modalIsOpen, setIsOpen] = useState(false)
  const [isVerified, setIsVerified] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignUpSchema),
  })

  function HandleRecaptcha() {
    setIsVerified(false)
  }

  const handleSignIn = async (e) => {
    try {
      await api.post(
        '/users',
        {
          firstName: e.firstName,
          lastName: e.lastName,
          username: e.email,
          email: e.email,
          password: e.password,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
          },
        }
      )

      setIsOpen(false)
      toast.success('Account Created Successfully')
    } catch (err) {
      handleSendErr(err)
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    setIsVerified(true)
  }

  return (
    <SignUpModalContainer>
      <SignUpContainer onClick={openModal}>Sign up</SignUpContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
      >
        <SignUpModal>
          <FaWindowClose className='closeModal' onClick={closeModal} />
          <h1>Create your Account</h1>

          <form onSubmit={handleSubmit(handleSignIn)}>
            <input
              {...register('firstName')}
              type='text'
              placeholder='First Name'
            />
            {errors.firstName ? <span>{errors.firstName.message}</span> : ''}
            <input
              {...register('lastName')}
              type='text'
              placeholder='Last Name'
            />
            {errors.lastName ? <span>{errors.lastName.message}</span> : ''}
            <input {...register('email')} type='email' placeholder='Email' />
            {errors.email ? <span>{errors.email.message}</span> : ''}
            <input
              {...register('password')}
              type='password'
              placeholder='Password'
            />
            {errors.password ? <span>{errors.password.message}</span> : ''}
            <input
              {...register('passwordConfirmation')}
              type='password'
              placeholder='Password Confirmation'
            />
            {errors.passwordConfirmation ? (
              <span>{errors.passwordConfirmation.message}</span>
            ) : (
              ''
            )}
            <ReCAPTCHA
              className='recaptcha'
              sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
              onChange={HandleRecaptcha}
            />
            <button type='submit' value='Confirm' disabled={isVerified}>
              Create
            </button>
          </form>
        </SignUpModal>
      </Modal>
    </SignUpModalContainer>
  )
}
