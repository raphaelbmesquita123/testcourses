import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//styles
import { Container } from './styles'

//services
import { api } from '../../services/api'
import { handleSendErr } from '../../services/sendError'

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
              description: data.description,
          })
        })
        .catch((err) => handleSendErr(err))
    }
    getCourses()
  }, [id])


  return (
    <Container>
        <div dangerouslySetInnerHTML={{__html: JSON.stringify(course?.description)}}></div>
    </Container>
  )
}
