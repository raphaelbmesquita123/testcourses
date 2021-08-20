import React from 'react'
import { ProfessionalUser } from './ProfessionalUser/ProfessionalUser'

import { User } from '../../context/UserContext/UserContext'

import { useHistory } from 'react-router-dom'



export function UserPage() {
    const { user } = User()
    const history = useHistory()

    if( user === null ){
        history.push('/')
    }

    return (
        <>
            <ProfessionalUser />
        </>
    )
}









