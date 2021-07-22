import React from 'react'
// import { Link } from 'react-router-dom'
import { CourseCard } from '../../components/CourseCard/CourseCard'
import { Container } from './styles'
// import { Carousel } from 'react-responsive-carousel';
import { useWindowSize } from '../../services/windowDimensions';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

    

export function HomePage() {
    const { width } = useWindowSize()


    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_xfskimn', 'template_a3j93kc', e.target, 'user_b3vLK4nmsJDCovCRtPpoB')
            .then((result) => {
            toast.success('You message was sent')
            console.log(result.text);
            }, (error) => {
            console.log(error.text);
            });
        }
        
        var settings = {
            infinite: true,
            slidesToShow: width < 600 ? 2 : width < 1000 ? 3 : 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",

          };

    return (
        <Container>
            {/* <Carousel
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
              
            </Carousel> */}
            <div className='logoCasousel'>
                <Slider {...settings}>
                    <img src="./l1.png" alt="" />                
                    <img src="./l2.png" alt="" />                
                    <img src="./l3.png" alt="" />                
                    <img src="./l1.png" alt="" />                
                    <img src="./l2.png" alt="" />                
                    <img src="./l3.png" alt="" />                          
                    <img src="./l3.png" alt="" />                          
                </Slider>
            </div>
            <div className="ourCourses">
                <h1> OUR COURSES </h1>
                <section>
                    <CourseCard image='./kpcourse.png'/>
                    <CourseCard image='./kpcourse.png'/>
                    <CourseCard image='./kpcourse.png'/>
                </section>
            </div>
            <div className='whyTestcourses'>
                <div>

                </div>
                <div>
                    <h1>WHY TESTCOURSES?</h1>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta architecto odio exercitationem repudiandae consequuntur iste, alias ad quis corporis velit voluptas, laboriosam quam ut. Architecto distinctio dolores voluptatum blanditiis repellendus.
                        Ipsa unde error accusamus aspernatur ipsum vitae! Aperiam sunt animi eius, tenetur nihil minus veniam repellat sint impedit, provident debitis, exercitationem accusamus voluptatem dicta obcaecati distinctio saepe quisquam aliquid sit.
                    </p>
                </div>
            </div>
            <div className='certificateContainer'>
                <h1>TEXTCOURSES CERTIFICATES</h1>
                <div>
                    <img src="./certificate.png" alt="certificate" />
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, et. Cum aliquam quidem tempora earum eligendi iure repellendus vel. Sed, odit. Repellat quaerat adipisci, iusto dolorem enim aut mollitia excepturi!
                    Esse corporis quo rem repellendus adipisci cum soluta illum velit beatae, quasi aspernatur assumenda officia aliquid voluptas magni debitis labore? Dignissimos maiores aspernatur totam, molestiae sit error omnis excepturi quisquam!
                    Nobis, voluptatum dicta? Iste eos sed recusandae modi minus aspernatur, magni quod, explicabo a facere, sit quo? Explicabo placeat, illum similique unde aut magni rem omnis.</span>
                </div>
            </div>
            <div className='contactUs' id='contactUs'>
                <form  onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Name" required/>

                    <input type="text" name="email" placeholder="Email" required/>

                    <textarea name="message" className="formTextArea" placeholder='DROP US A MESSAGE' required/>

                    <button type="submit">Send</button>
                </form>
            </div>
        </Container>
    )
}
