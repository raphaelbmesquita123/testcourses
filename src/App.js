import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { ContainerMessage, FooterContainer, CarouselContainer } from './styles/styles'

import { FaFacebook, FaInstagram } from "react-icons/fa";

import { NavBar } from './components/NavBar/NavBar'

//REACT-TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { HomePage } from './pages/HomePage/HomePage';

import { useWindowSize } from './services/windowDimensions';

import WhyPage from './pages/WhyPage/WhyPage';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  const { width } = useWindowSize()

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickPlay: true,
    autoplay: true,
    arrows: false,
    autoPlaySpeed:true,
  };

  return (
    <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <GlobalStyle/>
        <ContainerMessage>
          <h1>
            BE PREPARED FOR THE LABOR MARKET
          </h1>
        </ContainerMessage>

        <NavBar />
        <CarouselContainer>
          <Slider {...settings}>
              <div>
                <section>
                  <h2>Kitchen Porter</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est ducimus quasi distinctio vel fuga veniam consequuntur eveniet minima fugiat rerum numquam accusamus, eligendi nulla praesentium voluptatibus et. Magnam, aliquid.</p>
                </section>
                <img src={width < 600 ? './kpimage2.png' : './kpimage.png'} alt='kpimage'/>                
              </div>
              
              <div>
              <section>
                  <h2>Kitchen Porter1</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est ducimus quasi distinctio vel fuga veniam consequuntur eveniet minima fugiat rerum numquam accusamus, eligendi nulla praesentium voluptatibus et. Magnam, aliquid.</p>
                </section>
                <img src={width < 600 ? './kpimage2.png' : './kpimage.png'} alt='kpimage'/>                
              </div>

              <div>
                <section>
                  <h2>Kitchen Porter2</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est ducimus quasi distinctio vel fuga veniam consequuntur eveniet minima fugiat rerum numquam accusamus, eligendi nulla praesentium voluptatibus et. Magnam, aliquid.</p>
                </section>
                <img src={width < 600 ? './kpimage2.png' : './kpimage.png'} alt='kpimage'/>                
              </div>                     
          </Slider>
        </CarouselContainer>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/WhyPage" component={WhyPage}/>
        </Switch>

      <FooterContainer>
        <section>
          <Link to='/'>
            TESTCOURSES@GMAILCOM
          </Link>
          <div>
            <Link to='/'>
              <FaFacebook/>
            </Link>
            <Link to='/'>
              <FaInstagram />
            </Link>
          </div>
          <small>2021 TESTCOURSES ALL RIGHTS RESERVED</small>
        </section>
      </FooterContainer>
    </BrowserRouter>
  );
}

export default App;
