import React, { useState } from 'react'
import { Container } from './styles'

import { FaArrowAltCircleDown } from "react-icons/fa";

export function FAQ({question, answer}) {
    const [ show, setShow ] = useState(true)
    return (
        <Container>
            <div className="question">
                <h3>{question}</h3>
                <small>
                    <FaArrowAltCircleDown onClick={ () => setShow(!show) }/>
                </small>
            </div>
            <div className="answer" style={{ display: show ? 'none' : 'flex'}}>
                <small>
                    {answer}

                </small>
            </div>
        </Container>
    )
}
