import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { ContainerMessage, FooterContainer } from './styles/styles'

import { FaFacebook, FaInstagram } from "react-icons/fa";

import { NavBar } from './components/NavBar/NavBar'

//REACT-TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { HomePage } from './pages/HomePage/HomePage';
import { WhyPage } from './pages/WhyPage/WhyPage';

import { UserPage } from './pages/UserPage/UserPage';
import { UserProvider } from './context/UserContext/UserContext';
import { BasketProvider } from './context/BasketContext/BasketContext';


function App() {
  return (
    <BasketProvider>
      <UserProvider>
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

            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/WhyPage" component={WhyPage}/>
              <Route exact path="/:id" component={UserPage}/>
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
      </UserProvider>
    </BasketProvider>
  );
}

export default App;
