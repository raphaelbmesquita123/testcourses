import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import {  ContainerMessage } from './styles/styles'

import { NavBar } from './components/NavBar/NavBar'

//REACT-TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//REACT-RESPONSIVE-CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { HomePage } from './pages/HomePage/HomePage';
// import { UserPage } from './pages/UserPage/UserPage';

function App() {
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

        <Carousel
          infiniteLoop = {true}
          autoPlay={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
        >
          <div>
              <img src="./kpimage.png" alt='kpimage'/>
          </div>
          <div>
              <img src="./cleannerimage.png" alt='cleannerimage'/>
          </div>
          <div>
              <img src="./kpimage.png" alt='kpimage'/>
          </div>
      </Carousel>
      <HomePage />
      {/* <Switch>
        <Router exact path="/" component={HomePage}/>
        <Router exact path="/userpage" component={UserPage}/>
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
