import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//styles
import { Container } from './styles'

//services
import { api } from '../../services/api'


export function CourseDescriptionPage() {
  const { id } = useParams()
  const [ course, setCourse ] = useState(null)   


  useEffect(() => {
    function getCourses() {
      api
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
        .catch((error) => console.log(error))
    }
    getCourses()
  }, [id])


  return (
    <Container>
        <div dangerouslySetInnerHTML={{__html: JSON.stringify(course?.description)}}></div>
    </Container>
  )
}
