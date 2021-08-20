import { LoginButtonContainer, LoginContainer } from './styles'
import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { api } from '../../services/api/api'
import { User } from '../../context/UserContext/UserContext';

import { toast } from 'react-toastify';

const LoginSchema = yup.object().shape({
    email: yup.string().required('Email required'),
    password: yup.string().required('Password required').min(6, 'Minimum 6 characters'),
});

export function LoginButton() {
    const [ loginOpen, setLoginOpen ] = useState(false);
    const { UserLogIn } = User()

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(LoginSchema)
      });

    const handleLogIn = async (value) => {
        try{
            await api.post('/auth/local',{
                identifier: value.email,
                password: value.password,
                },{
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`
                    }
                })
                .then(response => {
                // Handle success.
                    const { data } = response
                    UserLogIn(data)
                    setLoginOpen(false)
                    toast.success(`Welcome ${data.user.firstName}`)
                })
                .catch(error => {
                // Handle error.
                const { data } = error.response
                if (data.error) {
                    if (data.message[0].messages[0].message === 'Identifier or password invalid.') {
                        toast.error('E-mail or password incorrect')
                    } else if (data.message[0].messages[0].id === 'Auth.form.error.confirmed') {
                        toast.error('Confirm your email bedore continuing')
                    }
                    else {
                        toast.error('E-mail or password incorrect')
                    }
                } 
            });           
        }catch (err){
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
                onSubmit={handleSubmit(handleLogIn)}
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
