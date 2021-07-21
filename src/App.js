import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { ContainerMessage, FooterContainer, CarouselContainer } from './styles/styles'

import { FaFacebook, FaInstagram } from "react-icons/fa";

import { NavBar } from './components/NavBar/NavBar'

//REACT-TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//REACT-RESPONSIVE-CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import { HomePage } from './pages/HomePage/HomePage';

import { useWindowSize } from './services/windowDimensions';

import WhyPage from './pages/WhyPage/WhyPage';


function App() {
  const { width } = useWindowSize()
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
          <Carousel
            infiniteLoop = {true}
            autoPlay={true}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={false}
            >
            <div>
                <img src={width < 600 ? './kpimage2.png' : './kpimage.png'} alt='kpimage'/>
            </div>
 
            <div>
                <img src={width < 600 ? './kpimage2.png' : './kpimage.png'} alt='kpimage'/>
            </div>
            <div>
                <img src={width < 600 ? './kpimage2.png' : './kpimage.png'} alt='kpimage'/>
            </div>
          </Carousel>
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
