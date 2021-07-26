import React from 'react'
import { Link } from 'react-router-dom'
import { Basket } from '../../context/BasketContext/BasketContext'
import { CardContainer } from './styles'
// import { User } from '../../context/UserContext/UserContext' 
 

export function CourseCard({image}) {
    // const { isUserLogged } = User()
    const { addToBasket } = Basket()
    const bought = true

    function handleAddToBasket (){
        addToBasket(1)
    }

    return (
        <CardContainer>
            <img src={image}  alt="kp course" />
            <Link to='/'>
                <span>
                    MORE INFORMATIONS
                </span>
            </Link>
            <div style={{ backgroundColor: `${bought ? 'green' : 'var(--blue-900)'}`}} onClick={handleAddToBasket}>
                <p>{bought ? 'PLAY COURSE' : '30E ADD TO BASKET'}</p>
            </div>
        </CardContainer>
    )
}
