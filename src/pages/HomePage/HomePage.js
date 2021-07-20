import React from 'react'
import { Link } from 'react-router-dom'
import { CourseCard } from '../../components/CourseCard/CourseCard'
import { Container } from './styles'

export function HomePage() {
    return (
        <Container>

            <div className="ourCourses">
                <CourseCard image='./kpcourse.png'/>
                <CourseCard image='./kpcourse.png'/>
                <CourseCard image='./kpcourse.png'/>
                <CourseCard image='./kpcourse.png'/>
                <CourseCard image='./kpcourse.png'/>
                <CourseCard image='./kpcourse.png'/>
                <CourseCard image='./kpcourse.png'/>
                <CourseCard image='./kpcourse.png'/>
            </div>
            <div className='messageContainer'>
                <h1>WHY TESTCOURSES?</h1>
                <text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta architecto odio exercitationem repudiandae consequuntur iste, alias ad quis corporis velit voluptas, laboriosam quam ut. Architecto distinctio dolores voluptatum blanditiis repellendus.
                    Ipsa unde error accusamus aspernatur ipsum vitae! Aperiam sunt animi eius, tenetur nihil minus veniam repellat sint impedit, provident debitis, exercitationem accusamus voluptatem dicta obcaecati distinctio saepe quisquam aliquid sit.
                </text>
                <div>
                    <Link to='/'>
                        KNOW MORE
                    </Link>
                </div>
            </div>
        </Container>
    )
}
