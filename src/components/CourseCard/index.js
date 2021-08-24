import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

//styles
import { CardContainer, BuyPlayButton } from './styles'

//context
import { User } from '../../context/UserContext'
import { Basket } from '../../context/BasketContext'

export function CourseCard({ image, id, payed }) {
  const { addToBasket } = Basket()
  const { user } = User()

  function handleAddToBasket(id) {
    if (!user) {
      toast.error('You have to log in first')
    } else {
      addToBasket(id)
    }
  }

  return (
    <CardContainer>
      <img src={image} alt='kp course' />

      {payed ? (
        <Link to={`/course/${id}`}>
          <BuyPlayButton backgroundColor='green'>
            <p>PLAY COURSE</p>
          </BuyPlayButton>
        </Link>
      ) : (
        <>
          <Link to={`/course/description/${id}`}>
            <span>MORE INFORMATIONS</span>
          </Link>
          <BuyPlayButton
            backgroundColor='var(--blue-900)'
            onClick={() => handleAddToBasket(id)}
          >
            <p>30E ADD TO BASKET</p>
          </BuyPlayButton>
        </>
      )}
    </CardContainer>
  )
}