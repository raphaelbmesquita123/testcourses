import React from 'react'
import { useHistory, Link } from 'react-router-dom'

//styles
import { Container } from './styles'

//toastify
import { toast } from 'react-toastify'

//contexts
import { User } from '../../../context/UserContext'
import { Basket } from '../../../context/BasketContext'

export function UserLogged() {
  const { basket } = Basket()
  const { userLogOut, user, handleUserPageOption } = User()
  const history = useHistory()

  function handleUserLogOut() {
    userLogOut()
    history.push('/')
    toast.success('You were log out')
  }

  function handleBaskePageOption() {
    if (basket.length > 0) {
      history.push(`/user/${user?.user.firstName + user?.user.lastName}`)
      handleUserPageOption(3)
    } else {
      history.push(`/user/${user?.user.firstName + user?.user.lastName}`)
    }
  }

  return (
    <Container>
      <div>
        <div onClick={() => handleBaskePageOption()}>
          {basket.length === 0 ? '' : <span>{basket.length}</span>} Basket
        </div>
        <p onClick={handleUserLogOut}>Log out</p>
      </div>
      <Link to={`/user/${user?.user.firstName + user?.user.lastName}`}>
        <section>
          {user && user?.user.firstName[0] + user?.user.lastName[0]}
        </section>
      </Link>
    </Container>
  )
}
