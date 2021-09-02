import React from 'react'
import { Container, TextContainer } from './styles'
import MarkdownView from 'react-showdown';

export function CourseContent({ content, loading }) {

  if (loading) {
    return <h2>loading</h2>
  } else {
    return (
      <>
        {content.map((course) => {
          return (
            <Container key={course.id}>
              {course.url === undefined ? (
                <>
                  <h3>{course.title}</h3>
                  <TextContainer height='25rem'>
                    <MarkdownView
                        markdown={`${course.description}`}
                        options={{ tables: true, emoji: true }}
                      />
                  </TextContainer>
                </>
              ) : (
                <>
                  <video controls>
                    <source src={course.url} />
                  </video>
                  <h3>{course.title}</h3>
                  <TextContainer height='15rem'>
                    <MarkdownView
                      markdown={`${course.description}`}
                      options={{ tables: true, emoji: true }}
                    />
                  </TextContainer>
                </>
              )}
            </Container>
          )
        })}
      </>
    )
  }
}
