import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

//components
import { CertificateCard } from '../../../components/CertificateCard'
import { CourseCard } from '../../../components/CourseCard'
import CheckoutForm from '../CheckoutForm'

//styles
import { Container, ItemBasket, CoursesContainer, CertificatesContainer } from './styles'

//contexts
import { User } from '../../../context/UserContext'
import { Basket } from '../../../context/BasketContext'

//services
import { api } from '../../../services/api'
import { handleSendErr } from '../../../services/sendError'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC)

export function ProfessionalUser() {
  const [option, setOption] = useState(1)
  const { user, handleUserCourses, userCourses } = User()
  const { basket, deletItem } = Basket()

  function handleDeletItem(id) {
    deletItem(id)
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
            background: option === 1 ? 'var(--blue-100)' : 'var(--blue-500)',
          }}
          onClick={() => setOption(1)}
        >
          <p>Your Courses</p>
        </div>
        <div
          style={{
            background: option === 2 ? 'var(--blue-100)' : 'var(--blue-500)',
          }}
          onClick={() => setOption(2)}
        >
          <p>Certificates</p>
        </div>
        {basket.length > 0 ? (
          <div
            style={{
              background: option === 4 ? 'var(--blue-100)' : 'var(--blue-500)',
            }}
            onClick={() => setOption(4)}
          >
            <p>Basket</p>
          </div>
        ) : (
          ''
        )}
      </main>
      <section>
        {option === 1 ? (
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
        ) : option === 2 ? (
          <CertificatesContainer>
            <CertificateCard />
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
