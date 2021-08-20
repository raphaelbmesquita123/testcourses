import React, { useState, useEffect } from 'react'
import { Container } from './styles'

import { useHistory, useParams } from 'react-router-dom'
import { api } from '../../services/api/api'

//context
import { User } from '../../context/UserContext/UserContext'
import { CourseContent } from '../../components/CourseContent/CourseContent'


import ProgressBar from "@ramonak/react-progress-bar";

export function CoursePage() {
    const { id } = useParams()
    const { user } = User()
    const [ coursePlaying, setCoursePlaying ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ currentPage, setCurrentPage ] = useState(1)
    const [ contentPerPage ] = useState(1)
    const [ previousButtonDisbled, setPreviousButtonDisbled ] = useState(true)
    const [ progressValue, setProgressValue ] = useState(20)
    
    const history = useHistory()

    if( user === null ){
        history.push('/')
    }

    useEffect( () => {
        function getCourses () {
            api.get(`/courses/${id}`, 
            {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_STRAPI_JWT}`
                }
            }
            )
            .then(response => {
                const { data } = response
                const splitClients = data.payed_clients.split(' ')
                const isUserPayed = splitClients.includes(user.user.email)
                if(isUserPayed){
                    setCoursePlaying(data)
                    setIsLoading(false)
                }
            })
            .catch(error => console.log(error))
        }
        getCourses()
    }, [user])

    console.log(currentPage)


    // Get corrent video
    const indexOfLastContent = currentPage * contentPerPage
    const indexOfFistContent = indexOfLastContent - contentPerPage
    const currentContent = coursePlaying?.curriculum.slice(indexOfFistContent, indexOfLastContent)
    const contentLength = coursePlaying?.curriculum.length
    
    function HandlePreviousPage () {
        setProgressValue(100 / currentPage)
        setCurrentPage(currentPage - 1 )
        if(currentPage === 1){
            setPreviousButtonDisbled(true)
        }
    }
    
    function HandleNextPage () {
        setProgressValue(100 / currentPage)
        setCurrentPage(currentPage + 1 )
    }


    return (
        <Container>
                <h1>{coursePlaying?.title}</h1>
                <div>
                <CourseContent loading={isLoading} content={currentContent} />
                <section>
                    <button 
                        className='previousPage'
                        onClick={() => HandlePreviousPage()}
                        // disabled={currentPage === 1 ? true : false}
                        disabled={currentPage === 1 ? true : false}
                    >
                        Previous
                    </button>
                    <button
                        className='nextPage' 
                        onClick={() => HandleNextPage()}
                        disabled={currentPage === contentLength ? true : false}
                    >
                        Next
                    </button>

                </section>
                </div>

                <section className='progressbar'>
                    <ProgressBar
                        bgColor='var(--blue-100)'  
                        height='30px'                  
                        completed={progressValue}
                        />
                </section>
        </Container>
    )
}
