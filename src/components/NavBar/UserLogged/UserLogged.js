import React from 'react'
import { Basket } from '../../../context/BasketContext/BasketContext'
import { Container } from './styles'
import { useHistory, Link } from 'react-router-dom'
import { User } from '../../../context/UserContext/UserContext'
import { toast } from 'react-toastify'

export function UserLogged() {
    const { basket } = Basket()
    const { UserLogOut, user } = User()
    const history = useHistory()

    function HandleUserLogOut (){
        UserLogOut()
        history.push('/')
        toast.success('You were log out')
    }

    return (
        <Container>
            <div>
                <Link to={`/${user.user.firstName+user.user.lastName}`}>{basket.length === 0 ? '' : <span>{basket.length}</span>} Basket</Link>
                <p onClick={HandleUserLogOut}>Log out</p>
            </div>
            <section>
                <Link to={`/${user.user.firstName+user.user.lastName}`}>
                    {
                        user === null ?
                        ''
                        : 
                        user.user.firstName[0] + user.user.lastName[0]
                    }
                </Link>
            </section>
        </Container>
    )
}

