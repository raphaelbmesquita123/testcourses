import React from 'react'
import { useHistory } from 'react-router-dom'

//component
import { ProfessionalUser } from './ProfessionalUser'

//context
import { User } from '../../context/UserContext'


export function UserPage() {
    const { user } = User()
    const history = useHistory()

    if(!user){
        history.push('/')
    }

    return (
        <>
            <ProfessionalUser />
        </>
    )
}









