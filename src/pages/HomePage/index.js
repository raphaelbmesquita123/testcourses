import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

//styles
import { Container, CarouselContainer } from './styles'

//component
import { CourseCard } from '../../components/CourseCard'

//services
import { useWindowSize } from '../../services/windowDimensions/windowDimensions'

//context
import { Basket } from '../../context/BasketContext'

export function HomePage() {
  const { width } = useWindowSize()
  const { courses, loading } = Basket()

  var settingsLogoSlider = {
    infinite: true,
    slidesToShow: width < 600 ? 2 : width < 1000 ? 5 : 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
  }

  return (
    <Container>
      <CarouselContainer>
        <div>
          <div></div>
        </div>
        <span>
          <h1>Become a certified professional!</h1>
          <h3>
            Our mission is to train people who are looking to become a
            professional to facilitate their search in the job market
          </h3>
        </span>
        <a href='#ourCourses'>
          <FaAngleDown />
        </a>
      </CarouselContainer>
      <div className='logoCasousel'>
        <Slider {...settingsLogoSlider}>
          <img src='./l1.png' alt='logo' />
          <img src='./l2.png' alt='logo' />
          <img src='./l3.png' alt='logo' />
          <img src='./l1.png' alt='logo' />
          <img src='./l2.png' alt='logo' />
          <img src='./l3.png' alt='logo' />
          <img src='./l3.png' alt='logo' />
        </Slider>
      </div>
      <div className='ourCourses' id='ourCourses'>
        <h1> Our courses </h1>
        <section>
          {courses.map((course) => {
            return (
              <CourseCard
                key={course.id}
                id={course.id}
                image={course.image}
                title={course.title}
                price={course.price}
                payed={false}
                loading={loading}
              />
            )
          })}
        </section>
      </div>
      <div className='whyTestcourses'>
        <div></div>
        <div>
          <h1>Why testcourses?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            architecto odio exercitationem repudiandae consequuntur iste, alias
            ad quis corporis velit voluptas, laboriosam quam ut. Architecto
            distinctio dolores voluptatum blanditiis repellendus. Ipsa unde
            error accusamus aspernatur ipsum vitae! Aperiam sunt animi eius,
            tenetur nihil minus veniam repellat sint impedit, provident debitis,
            exercitationem accusamus voluptatem dicta obcaecati distinctio saepe
            quisquam aliquid sit.
          </p>
        </div>
      </div>
      <div className='certificateContainer'>
        <h1>Textcourses certificate</h1>
        <div>
          <img src='./certificate.png' alt='certificate' />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, et.
            Cum aliquam quidem tempora earum eligendi iure repellendus vel. Sed,
            odit. Repellat quaerat adipisci, iusto dolorem enim aut mollitia
            excepturi! Esse corporis quo rem repellendus adipisci cum soluta
            illum velit beatae, quasi aspernatur assumenda officia aliquid
            voluptas magni debitis labore? Dignissimos maiores aspernatur totam,
            molestiae sit error omnis excepturi quisquam! Nobis, voluptatum
            dicta? Iste eos sed recusandae modi minus aspernatur, magni quod,
            explicabo a facere, sit quo? Explicabo placeat, illum similique unde
            aut magni rem omnis.
          </span>
        </div>
      </div>
    </Container>
  )
}
