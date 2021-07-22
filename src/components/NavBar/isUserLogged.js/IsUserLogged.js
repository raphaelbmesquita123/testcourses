import React from 'react'
import { Container } from './styles'

export function IsUserLogged() {
    return (
        <Container>
            <div>
                <p>My Courses</p>
                <a href='/'> Log out</a>
            </div>
            <section>
                <a to='/UserPage'>
                    <span>RM</span>
                </a>
            </section>
        </Container>
    )
}

