import React, { useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { jsPDF } from 'jspdf'

//components
import { CertificateCard } from '../../../components/CertificateCard'
import { CourseCard } from '../../../components/CourseCard'
import CheckoutForm from '../CheckoutForm'

//styles
import {
  Container,
  ItemBasket,
  CoursesContainer,
  CertificatesContainer,
} from './styles'

//contexts
import { User } from '../../../context/UserContext'
import { Basket } from '../../../context/BasketContext'

//services
import { api } from '../../../services/api'
import { handleSendErr } from '../../../services/sendError'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC)

export function ProfessionalUser() {
  const {
    user,
    handleUserCourses,
    userCourses,
    userPageOption,
    handleUserPageOption,
  } = User()
  const { basket, deletItem } = Basket()

  function handleDeletItem(id) {
    deletItem(id)
  }

  function hadlerPageOption(num) {
    handleUserPageOption(num)
  }

  function jsPdfGenerator(course, user) {
    var doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [210, 297],
    })

    doc.addImage('/certificatevDownload.png', 'JPEG', 0, 0, 297, 210)

    doc.setFontSize(40)
    doc.text(
      `${user.user.firstName} ${user.user.lastName}`,
      148,
      123,
      null,
      null,
      'center'
    )

    doc.setFontSize(16)
    doc.setTextColor(157, 158, 158)
    doc.text(
      `Has succesccfully completed training`,
      148,
      140,
      null,
      null,
      'center'
    )

    doc.setFontSize(30)
    doc.setTextColor(0, 0, 0)
    doc.text(`${course.title}`, 148, 155, null, null, 'center')

    doc.save(`${course.title}/${user.user.firstName} ${user.user.lastName}`)
  }

  useEffect(() => {
    async function getCourses() {
      await api
        .get('/courses', {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
          },
        })
        .then((response) => {
          const { data } = response
          const payedCourses = []
          for (let i = 0; i < data.length; i++) {
            const splitClients = data[i].payed_clients.split(' ')
            const isUserPayed = splitClients.includes(user.user.email)
            if (isUserPayed) {
              payedCourses.push(data[i])
            }
          }
          handleUserCourses(payedCourses)
        })
        .catch((err) => handleSendErr(err))
    }
    getCourses()
  }, [user, handleUserCourses])

  return (
    <Container>
      <div className='helloContainer'>
        <p>Hello, {user?.user.firstName + ' ' + user?.user.lastName}!</p>
      </div>
      <main>
        <div
          style={{
            background:
              userPageOption === 1 ? 'var(--blue-100)' : 'var(--blue-500)',
          }}
          onClick={() => hadlerPageOption(1)}
        >
          <p>Your Courses</p>
        </div>
        <div
          style={{
            background:
              userPageOption === 2 ? 'var(--blue-100)' : 'var(--blue-500)',
          }}
          onClick={() => hadlerPageOption(2)}
        >
          <p>Certificates</p>
        </div>
        {basket.length > 0 ? (
          <div
            style={{
              background:
                userPageOption === 3 ? 'var(--blue-100)' : 'var(--blue-500)',
            }}
            onClick={() => hadlerPageOption(3)}
          >
            <p>Basket</p>
          </div>
        ) : (
          ''
        )}
      </main>
      <section>
        {userPageOption === 1 ? (
          <CoursesContainer>
            {userCourses?.map((course) => {
              return (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  image={course.image[0].url}
                  payed={true}
                />
              )
            })}
          </CoursesContainer>
        ) : userPageOption === 2 ? (
          <CertificatesContainer>
            {userCourses?.map((course) => {
              const clients_certificated_array =
                course.clients_certificate.split(' ')
              const isClientCertificated = clients_certificated_array.includes(
                user?.user.email
              )
              if (isClientCertificated) {
                return (
                  <div key={course.id}>
                    <CertificateCard user={user} course={course} />
                    <button onClick={() => jsPdfGenerator(course, user)}>
                      DOWNLOAD
                    </button>
                  </div>
                )
              } else {
                return ''
              }
            })}
          </CertificatesContainer>
        ) : basket.length > 0 ? (
          <div className='basket'>
            {basket.map((course) => {
              return (
                <ItemBasket key={course.id}>
                  <h3>{course.title}</h3>
                  <small>{course.price}€</small>
                  <FaTrashAlt
                    className='deletCourse'
                    onClick={() => handleDeletItem(course.id)}
                  />
                </ItemBasket>
              )
            })}
            <Elements stripe={promise}>
              <CheckoutForm />
            </Elements>
          </div>
        ) : (
          ''
        )}
      </section>
    </Container>
  )
}
