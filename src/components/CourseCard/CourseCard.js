import React from 'react'
import { Link } from 'react-router-dom'
import { Basket } from '../../context/BasketContext/BasketContext'
import { CardContainer } from './styles'
import { User } from '../../context/UserContext/UserContext'
import { toast } from 'react-toastify'

export function CourseCard({image, id, payed}) {
    const { addToBasket } = Basket()
    const { user } = User()

    function handleAddToBasket (id){
        if(user === null) {
            toast.error('You have to log in first')
        } else {
            addToBasket(id)
        }
    }

    return (
        <CardContainer>
            <img src={image}  alt="kp course" />

            {
                payed ?
                <Link to={`/course/${id}`}>
                    <div style={{ backgroundColor: 'green'}}>
                        <p>PLAY COURSE</p>
                    </div>
                </Link>
                :
                <>
                    <Link to='/test'>
                        <span>
                            MORE INFORMATIONS
                        </span>
                    </Link>
                    <div style={{ backgroundColor: 'var(--blue-900)' }}
                    onClick={() => handleAddToBasket(id)}>
                    <p>30E ADD TO BASKET</p>
                </div>
                </>
            }
        </CardContainer>
    )
}
