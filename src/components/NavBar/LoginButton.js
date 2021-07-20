import { LoginButtonContainer, LoginContainer } from './styles'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { toast } from 'react-toastify';

const LoginSchema = yup.object().shape({
    email: yup.string().required('Email required'),
    password: yup.string().required('Password required').min(6, 'Minimum 6 characters'),
});

export function LoginButton() {
    const [ loginOpen, setLoginOpen ] = useState(false);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(LoginSchema)
      });

    const handleLogin = (e) => {
        try{
            setLoginOpen(false)
            toast.success('Welcome NAME')
        } catch (err){
            console.log(err)
        }
    }
    
    return (
        <LoginContainer>
            <LoginButtonContainer onClick={() => setLoginOpen(!loginOpen)}>
                Log in
            </LoginButtonContainer>
            <form 
                style={{ display: loginOpen? 'flex' : 'none'}}
                onSubmit={handleSubmit(handleLogin)}
                >
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
                <button type="submit">Log In</button>
            </form>
            
        </LoginContainer>
    )
}
