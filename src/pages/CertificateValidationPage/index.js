import React, { useState } from 'react'
import { toast } from 'react-toastify'

//styles
import { Container, ValidationContainer } from './styles'

//services
import { api } from '../../services/api'
import { handleSendErr } from '../../services/sendError'

//context
import { Basket } from '../../context/BasketContext'
import { LoadingSpinner } from '../../components/LoadingSpinner'

export function CertificateValidationPage() {
  const { courses } = Basket()
  const [loading, setLoading] = useState(false)
  const [option, setOption] = useState('')
  const [code, setCode] = useState('')

  async function hadleCourseValidation(e) {
    e.preventDefault()
    setLoading(true)
    try {
      const { data: userEmail } = await api.get(`/users/${code}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
        },
      })
      const course = courses.find((course) => course.title === option)
      const { data: usersCertificated } = await api.get(
        `courses/${course.id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
          },
        }
      )
      const clientsCertificatedArray =
        usersCertificated.clients_certificate.split(' ')
      const isClientCertificated = clientsCertificatedArray.includes(
        userEmail.email
      )
      if (isClientCertificated) {
        toast.info(
          `${userEmail.firstName} ${userEmail.lastName} has done the course ${usersCertificated.title}`
        )
        setLoading(false)
      } else {
        toast.error(
          `${userEmail.firstName} ${userEmail.lastName} has not done the course ${usersCertificated.title}`
        )
        setLoading(false)
      }
    } catch (err) {
      handleSendErr(err)
    }
  }

  return (
    <Container>
      {loading && <LoadingSpinner loading={loading} />}
      <section>
        <div>
          <h1>Certificate Validation</h1>
        </div>
      </section>
      <ValidationContainer>
        <p>
          To check if the certificate is valid, please choose the course that
          has written on your certificate and its code
        </p>
        <form onSubmit={(e) => hadleCourseValidation(e)}>
          <select
            name='Course'
            id='Course'
            onChange={(e) => setOption(e.target.value)}
            required
          >
            <option value='' disabled selected>
              Select your Course
            </option>
            {courses.map((course) => {
              return (
                <option value={course.title} key={course.id}>
                  {course.title}
                </option>
              )
            })}
          </select>
          <input
            onChange={(e) => setCode(e.target.value)}
            type='Code'
            placeholder='Code on certificate'
            required
          />
          <button type='submit'>Verify</button>
        </form>
      </ValidationContainer>
    </Container>
  )
}
