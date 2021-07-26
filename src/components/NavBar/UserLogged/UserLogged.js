import React from 'react'
import { Basket } from '../../../context/BasketContext/BasketContext'
import { Container } from './styles'
import { useHistory } from 'react-router-dom'
import { User } from '../../../context/UserContext/UserContext'
import { toast } from 'react-toastify'

export function UserLogged() {
    const { basket } = Basket()
    const { UserLogOut } = User()
    const history = useHistory()

    function HandleUserLogOut (){
        UserLogOut(false)
        history.push('/')
        toast.success('You were log out')
    }

    return (
        <Container>
            <div>
                <a href='/BasketPage'>{basket.length === 0 ? '' : <span>{basket.length}</span>} Basket</a>
                <p onClick={HandleUserLogOut}> Log out</p>
            </div>
            <section>
                <a href='/UserPage'>
                    RM
                </a>
            </section>
        </Container>
    )
}

