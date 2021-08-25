import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

//components
import { CourseCard } from '../../../components/CourseCard'
import CheckoutForm from '../CheckoutForm'

//styles
import { Container, ItemBasket } from './styles'

//contexts
import { User } from '../../../context/UserContext'
import { Basket } from '../../../context/BasketContext'

//services
import { api } from '../../../services/api'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC)

export function ProfessionalUser() {
  const [option, setOption] = useState(1)
  const { user, handleUserCourses, userCourses } = User()
  const { basket, deletItem } = Basket()

  function handleDeletItem(id) {
    deletItem(id)
  }
 
  useEffect(() => {
    function getCourses() {
      api
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
        .catch((error) => console.log(error))
    }
    getCourses()
  }, [user])

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
          <div className='CoursesContainer'>
            {
              userCourses?.map((course) => {
                return (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    image={course.image[0].url}
                    payed={true}
                  />
                )
              })
            }
          </div>
        ) : option === 2 ? (
          'OPCAO 2'
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
