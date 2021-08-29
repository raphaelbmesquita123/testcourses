import React from 'react'

//styles
import { Container } from './styles'

export function CertificateCard({course, user}) {
    
    return (
        <Container>
            <img src="/certificateTest.png" alt="certificate" />
            <h1>{course.title}</h1>
            <h3>{user.user.firstName} {user.user.lastName}</h3>
        </Container>
    )
}
