import React from 'react'
import { Link } from 'react-router-dom'
import { CardContainer } from './styles'
// import { User } from '../../context/UserContext/UserContext' 
 

export function CourseCard({image}) {
    // const { isUserLogged } = User()

    return (
        <CardContainer>
            <img src={image}  alt="kp course" />
            <Link to='/'>
                <span>
                    MORE INFORMATIONS
                </span>
            </Link>
            <div>
                <p>30E ADD TO BASKET</p>
            </div>
        </CardContainer>
    )
}
