import React from 'react'
import { Container } from './styles'

export function CourseContent({ content, loading }) {
  if (loading) {
    return <h2>loading</h2>
  } else {
    return (
      <>
        {content.map((item) => {
          const descriptionText = item.description

          return (
            <Container key={item.id}>
              {
                item.url === undefined ?
                <>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </>
                :
                <>
                  <video controls>
                    <source src={item.url} />
                  </video>
                  <h3>{item.title}</h3>
                  <p 
                    dangerouslySetInnerHTML={{
                      __html: descriptionText
                    }}
                    >
                    
                  </p>
                </>
              }
            </Container>
          )
        })}
      </>
    )
  }
}
