import React from 'react'
import { Container, TextContainer } from './styles'

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
              {item.url === undefined ? (
                <>
                  <h3>{item.title}</h3>
                  <TextContainer height='25rem'>
                    {item.description}
                  </TextContainer>
                </>
              ) : (
                <>
                  <video controls>
                    <source src={item.url} />
                  </video>
                  <h3>{item.title}</h3>
                  <TextContainer
                    height='auto'
                    dangerouslySetInnerHTML={{
                      __html: descriptionText,
                    }}
                  ></TextContainer>
                </>
              )}
            </Container>
          )
        })}
      </>
    )
  }
}
