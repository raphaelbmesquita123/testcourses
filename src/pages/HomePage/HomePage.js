import React from 'react'
import { Link } from 'react-router-dom'
import { CourseCard } from '../../components/CourseCard/CourseCard'
import { Container } from './styles'
import { Carousel } from 'react-responsive-carousel';
import { useWindowSize } from '../../services/windowDimensions';

export function HomePage() {
    const { width } = useWindowSize()
    return (
        <Container>
            <Carousel
            infiniteLoop = {true}
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            >
                <div>
                    <img src={width < 600 ? './logo2.png' : './logo1.png'}  alt='kpimage'/>
                </div>
                <div>
                    <img src={width < 600 ? './logo2.png' : './logo1.png'}  alt='kpimage'/>
                </div>
                <div>
                    <img src={width < 600 ? './logo2.png' : './logo1.png'}  alt='kpimage'/>
                </div>
              
            </Carousel>
            <div className="ourCourses">
                <h1> OUR COURSES </h1>
                <section>
                    <CourseCard image='./kpcourse.png'/>
                    <CourseCard image='./kpcourse.png'/>
                    <CourseCard image='./kpcourse.png'/>
                    <CourseCard image='./kpcourse.png'/>
                </section>
            </div>
            <div className='messageContainer' id='MessageContainer'>
                <h1>WHY TESTCOURSES?</h1>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta architecto odio exercitationem repudiandae consequuntur iste, alias ad quis corporis velit voluptas, laboriosam quam ut. Architecto distinctio dolores voluptatum blanditiis repellendus.
                    Ipsa unde error accusamus aspernatur ipsum vitae! Aperiam sunt animi eius, tenetur nihil minus veniam repellat sint impedit, provident debitis, exercitationem accusamus voluptatem dicta obcaecati distinctio saepe quisquam aliquid sit.
                </span>
                <div>
                    <Link to='/'>
                        KNOW MORE
                    </Link>
                </div>
            </div>
            <div className='certificateContainer'>
                <h1>TEXTCOURSES CERTIFICATES</h1>
                <div>
                    <img src="./certificate.png" alt="certificate" />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, et. Cum aliquam quidem tempora earum eligendi iure repellendus vel. Sed, odit. Repellat quaerat adipisci, iusto dolorem enim aut mollitia excepturi!
                    Esse corporis quo rem repellendus adipisci cum soluta illum velit beatae, quasi aspernatur assumenda officia aliquid voluptas magni debitis labore? Dignissimos maiores aspernatur totam, molestiae sit error omnis excepturi quisquam!
                    Nobis, voluptatum dicta? Iste eos sed recusandae modi minus aspernatur, magni quod, explicabo a facere, sit quo? Explicabo placeat, illum similique unde aut magni rem omnis labore voluptatem excepturi tempore.
                    Cum earum, tenetur fuga expedita eaque nisi fugit, fugiat ratione dolor quam minus impedit non quae repellendus ipsam quisquam! Aperiam debitis laboriosam nostrum autem maxime excepturi sunt omnis assumenda doloribus!
                    Delectus fugit quam earum fuga, minima ab praesentium molestias. Eaque, totam. Iusto saepe reprehenderit nihil. Tempora autem dolor esse assumenda! Error voluptatibus minima neque vel exercitationem odio. Saepe, placeat amet.</span>
                </div>
            </div>
        </Container>
    )
}
