import React, { useState } from 'react'
import { SignUpContainer, SignUpModal, SignUpModalContainer } from './styles'
import { useForm } from 'react-hook-form'
import { api } from '../../services/api/api'

import Modal from 'react-modal';
import { FaWindowClose } from "react-icons/fa";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';

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
        background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(233,233,233,0.5) 100%)',
        zIndex:6,
      },
  };

const SignUpSchema = yup.object().shape({
    firstName: yup.string().required('First Name required'),
    lastName: yup.string().required('Last Name required'),
    accountType:yup.string(),
    email: yup.string().required('Email required'),
    password: yup.string().required('Password required').min(6, 'Minimum 6 characters'),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
});


export function SignUpButton() {
    const [ modalIsOpen, setIsOpen ] = useState(false);
    const [ accountType, setAccountType ] = useState(true)


    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(SignUpSchema)
      });

    const handleSignIn = async (e) => {
        try{
            await api.post('/users', {
                firstName: e.firstName,
                lastName: e.lastName,
                username: e.email,
                email: e.email,
                accountType: e.accountType,
                password: e.password,
            })
            setIsOpen(false)
            toast.success('Account Created Successfully')
        } catch (err){
            console.log(err)
        }
    }

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
        <SignUpModalContainer>
            
            <SignUpContainer onClick={openModal}>
                Sign up
            </SignUpContainer>

     
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
            >
                <SignUpModal>
                    <FaWindowClose className="closeModal" onClick={closeModal}/>
                    <h1>Create your Account</h1>

                    <div>
                        <h2 
                            onClick={() => setAccountType(true)}
                            style={{ background: accountType ? 'var(--blue-100)': 'var(--blue-500)'}}>
                            Professional</h2>
                        <h2 
                            onClick={() => setAccountType(false)}
                            style={{ background: accountType ? 'var(--blue-500)': 'var(--blue-100)'}}>
                            Company</h2>
                    </div>

                    <form onSubmit={handleSubmit(handleSignIn)} >
                        <input 
                            {...register('firstName')}
                            type="text" 
                            placeholder="First Name"
                        />
                        {errors.firstName ? 
                            <span>
                                {errors.firstName.message}
                            </span>
                            :
                            ''
                        }
                        <input 
                            {...register('lastName')}
                            type="text" 
                            placeholder="Last Name"
                        />
                        {errors.lastName ? 
                            <span>
                                {errors.lastName.message}
                            </span>
                            :
                            ''
                        }
                        <input 
                            {...register('accountType')}
                            type="text" 
                            value={accountType? 'Professional' : 'Company'} 
                            readOnly
                            />
                        <input 
                            {...register('email')}
                            type="email" 
                            placeholder="Email"
                        />
                        {errors.email ? 
                            <span>
                                {errors.email.message}
                            </span>
                            :
                            ''
                        }
       
                        <input 
                            {...register('password')}
                            type="password" 
                            placeholder="Password"
                        />
                        {errors.password ? 
                            <span>
                                {errors.password.message}
                            </span>
                            :
                            ''
                        }
               
                        <input 
                            {...register('passwordConfirmation')}
                            type="password" 
                            placeholder="Password Confirmation"
                        />
                        {errors.passwordConfirmation ? 
                            <span>
                                {errors.passwordConfirmation.message}
                            </span>
                            :
                            ''
                        }
                        <button type="submit" value="Confirm">Create</button>
                    </form>
                </SignUpModal>
            </Modal>
        </SignUpModalContainer>
    )
}
