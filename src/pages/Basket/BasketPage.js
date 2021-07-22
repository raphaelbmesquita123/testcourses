import React from 'react'
import { Container } from './styles'
import { User } from '../../context/UserContext/UserContext'

export function BasketPage() {
    const { isUserLogged } = User()

    return (
        <Container>
            {isUserLogged ? 
            <div className='helloContainer'>
                <p>Hello, Raphael Mesquita</p>
            </div>
            :
            <div className='helloContainer'>
                <p>Log In to finish your paymet</p>
            </div>
            }
        </Container>
    )
}
