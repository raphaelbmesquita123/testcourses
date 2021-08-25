import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ProgressBar from '@ramonak/react-progress-bar'

//styles
import { Container } from './styles'

//services
import { api } from '../../services/api'

//context
import { User } from '../../context/UserContext'
import { CourseContent } from '../../components/CourseContent'

export function CoursePage() {
  const { id } = useParams()
  const { user } = User()
  const [coursePlaying, setCoursePlaying] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const [currentPage, setCurrentPage] = useState(() => {
    const localStore = localStorage.getItem(`${id}-Page:`)
    if(localStore){
      return JSON.parse(localStore)
    }
    return 1
  })
  const [contentPerPage] = useState(1)
  
  const [ previousButtonDisbled, setPreviousButtonDisbled ] = useState(true)
  const [ nextButtonDisbled, setNextButtonDisbled ] = useState(true)
  const [ progressValue, setProgressValue] = useState(100)

  
  // Get corrent video
  const indexOfLastContent = currentPage * contentPerPage
  const indexOfFistContent = indexOfLastContent - contentPerPage
  const currentContent = coursePlaying?.curriculum.slice(
    indexOfFistContent,
    indexOfLastContent
  )
  const contentLength = coursePlaying?.curriculum.length
  
  const history = useHistory()
  if (!user) {
    history.push('/')
  }

  //fetching the course
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
          const splitClients = data.payed_clients.split(' ')
          const isUserPayed = splitClients.includes(user.user.email)
          if (isUserPayed) {
            setCoursePlaying(data)
            setIsLoading(false)
          }
        })
        .catch((error) => console.log(error))
    }
    getCourses()
  }, [user])

  useEffect(() => {
    //Progress bar
    setProgressValue(0)
    if(coursePlaying){
      const progressContent = 100 / contentLength
      const percent = currentPage * progressContent
      setProgressValue(Number(percent.toFixed(0)))
    }
    
    //storage the page that the client stop for the last time
    localStorage.setItem(
      `${id}-Page:`,
      JSON.stringify(currentPage)
      )
      
    //handle disable button, so the client have to wait at least 15s in each page before go to the next
    setPreviousButtonDisbled(true)
    setNextButtonDisbled(true)

    setTimeout(
      function() {
        setPreviousButtonDisbled(false)
        setNextButtonDisbled(false)
        if(currentPage === 1) {
          setPreviousButtonDisbled(true)
        }
        if(currentPage === contentLength){
          setNextButtonDisbled(true)
        }
      },
      1500);
  }, [currentPage])


  return (
    <Container>
      <h1>{coursePlaying?.title}</h1>
      <div>
        <CourseContent loading={isLoading} content={currentContent} />
        <section>
          <button
            className='previousPage'
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={previousButtonDisbled}
          >
            Previous
          </button>
          <button
            className='nextPage'
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={nextButtonDisbled}
          >
            Next
          </button>
        </section>
      </div>

      <section className='progressbar'>
        <ProgressBar
          bgColor='var(--blue-100)'
          height='30px'
          completed={progressValue === 0 ? '' : progressValue}
        />
      </section>
    </Container>
  )
}
