import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

//component
import { LoadingSpinner } from '../LoadingSpinner'

//styles
import { CardContainer, BuyPlayButton, ImageContainer } from './styles'

//context
import { User } from '../../context/UserContext'
import { Basket } from '../../context/BasketContext'

export function CourseCard({ id, payed, image, title, price, loading }) {
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
      <ImageContainer>
        {loading ? <LoadingSpinner /> : <img src={image} alt='kp course' />}
      </ImageContainer>
      {payed ? (
        <Link to={`/course/${id}`}>
          <BuyPlayButton backgroundColor='green'>
            <p>PLAY COURSE</p>
          </BuyPlayButton>
        </Link>
      ) : (
        <>
          <Link to={`/course/description/${id}`}>
            <span>{title}</span>
          </Link>
          <BuyPlayButton
            backgroundColor='var(--blue-900)'
            onClick={() => handleAddToBasket(id)}
          >
            <p>{price}E ADD TO BASKET</p>
          </BuyPlayButton>
        </>
      )}
    </CardContainer>
  )
}
