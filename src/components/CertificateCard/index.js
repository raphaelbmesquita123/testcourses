import React from 'react'

//styles
import { Container } from './styles'

//images 
import certificateView from '../../images/certificatevView.png'

export function CertificateCard({ course, user }) {
  return (
    <Container>
      <img src={certificateView} alt='certificate' />
      <h3>
        {user.user.firstName} {user.user.lastName}
      </h3>
      <p>Has succesccfully completed training</p>
      <span>{course.title}</span>
      <h6>code: {user.user.id}</h6>
    </Container>
  )
}
