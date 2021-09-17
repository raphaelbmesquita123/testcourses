import React, { useState } from 'react'
import { FaArrowAltCircleDown } from 'react-icons/fa'

//styles
import { Container, AnswerContainer } from './styles'

export function FAQ({ question, answer }) {
  const [show, setShow] = useState(true)
  return (
    <Container>
      <div className='question'>
        <h3>{question}</h3>
        <small>
          <FaArrowAltCircleDown onClick={() => setShow(!show)} />
        </small>
      </div>
      <AnswerContainer display={show ? 'none' : 'flex'}>
        <small>{answer}</small>
      </AnswerContainer>
    </Container>
  )
}
