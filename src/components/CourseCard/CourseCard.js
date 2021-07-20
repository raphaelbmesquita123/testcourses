import React from 'react'
import { Link } from 'react-router-dom'
import { CardContainer } from './styles'
 

export function CourseCard({image}) {
    return (
        <CardContainer>
            <img src={image}   alt="kp course" />
            <Link to='/'>
                MORE INFORMATIONS
            </Link>
        </CardContainer>
    )
}
