import React from 'react'
import { Container } from './styles'

export function CourseContent({ content, loading }) {

    if(loading) {
        return <h2>loading</h2>
    } else{
        return (
            <>
                {
                    content.map(item => {
                        return(
                            <Container key={item.id}>
                                <video controls >
                                    <source src={item.url}/>
                                </video>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </Container >
                        )
                    })
                }
            </>
        )
    }
    
}

