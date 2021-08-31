import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MarkdownView from 'react-showdown';

//styles
import { Container, TextContainer } from './styles'

//services
import { api } from '../../services/api'

export function CourseDescriptionPage() {
  const { id } = useParams()
  const [ course, setCourse ] = useState(null)   


  useEffect(() => {
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
        })
        .catch((err) => console.log(err))
    }
    getCourses()
  }, [id])


  return (
    <Container>
        <section>
          <div><h1>{course?.title}</h1></div>
        </section>
        <TextContainer >
          <MarkdownView
            markdown={`${course?.description}`}
            options={{ tables: true, emoji: true }}
          />
        </TextContainer>
    </Container>
  )
}
