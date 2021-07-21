import React from 'react'
import { Container } from './styles'

export default function WhyPage() {
    return (
        <Container>
            <h1>Why testCourses?</h1>
            <div className="textWhy">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci a voluptate consequuntur suscipit necessitatibus nihil, aliquid atque sequi rem, ad provident quod quasi labore et blanditiis corrupti corporis magni cupiditate.
                Incidunt quam quod accusamus ipsam facere dignissimos, ad ut, voluptas culpa ipsum, doloribus dicta eveniet assumenda. Ex iure fugiat totam esse voluptatibus, explicabo aperiam non mollitia rerum, amet ipsa doloribus?</p>
            </div>
            <div className="forProfessionals">
                <h1> For Professionals </h1>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, esse et ad nulla eligendi temporibus officia cupiditate corrupti, iure repudiandae nihil placeat eos nam eveniet debitis eum sint autem similique!</p>
                    <img src="./certificate.png" alt="certifiicate" />
                </div>
                <img src="./professionals.png" alt="professionals" />

            </div>
        </Container>
    )
}
