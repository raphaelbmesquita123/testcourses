import React, { useState } from 'react'
import { CourseCard } from '../../components/CourseCard/CourseCard'
import { Container } from './styles'
import { useHistory } from 'react-router-dom'
import { User } from '../../context/UserContext/UserContext'

export function UserPage() {
    const { isUserLogged } = User()
    const history = useHistory()

    if( !isUserLogged ){
        history.push('/')
    }

    const [ option, setOption ] = useState(1)
    return (
        <Container>
            <div className='helloContainer'>
                <p>Hello, Raphael Mesquita</p>
            </div>
            <main>
                <div style={{ background: option === 1 ? 'var(--blue-100)': 'var(--blue-500)'}} onClick={() => setOption(1)}>COURSES</div>
                <div style={{ background: option === 2 ? 'var(--blue-100)': 'var(--blue-500)'}} onClick={() => setOption(2)}>CERTIFICATES</div>
                <div style={{ background: option === 3 ? 'var(--blue-100)': 'var(--blue-500)'}} onClick={() => setOption(3)}>PROFILE</div>
            </main>
            <section>
                {
                    option === 1 
                    ?
                        <>
                            <CourseCard image='./kpcourse.png'/>
                        </>
                    : option === 2 
                    ?
                    'opcao 2'
                    :
                    'opcao 3'
                }
            </section>
        </Container>
    )
}
