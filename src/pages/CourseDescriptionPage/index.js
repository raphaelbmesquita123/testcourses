import React, { useState, useEffect } from 'react'
import { CourseCard } from '../../components/CourseCard'
import { useParams } from 'react-router-dom'
import MarkdownView from 'react-showdown'

//components
import { LoadingSpinner } from '../../components/LoadingSpinner'

//styles
import { Container, TextContainer } from './styles'

//services
import { api } from '../../services/api'

export function CourseDescriptionPage() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    setLoading(true)
    async function getCourses() {
      await api
        .get(`/courses/${id}`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`,
          },
        })
        .then((response) => {
          const { data } = response
          setCourse({
            id: data.id,
            title: data.title,
            price: data.price,
            image: data.image[0].url,
            description: data.description,
          })
          setLoading(false)
        })
        .catch((err) => {
          setLoading(false)
          console.log(err)
        })
    }
    getCourses()
  }, [id])

  return (
    <Container>
      {loading && <LoadingSpinner />}
      <section>
        <div>
          <h1>{course?.title}</h1>
        </div>
      </section>
      <TextContainer>
        <MarkdownView
          markdown={`${course?.description}`}
          options={{ tables: true, emoji: true }}
        />
      </TextContainer>
      <CourseCard
        id={course?.id}
        image={course?.image}
        title={course?.title}
        price={course?.price}
        payed={false}
      />
    </Container>
  )
}
