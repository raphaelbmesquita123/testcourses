import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { ContainerMessage, FooterContainer } from './styles/styles'
import { FaFacebook, FaInstagram } from "react-icons/fa";

//COMPONENTS
import { NavBar } from './components/NavBar/NavBar'

//REACT-TOASTIFY
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//PAGES
import { HomePage } from './pages/HomePage/HomePage';
import { UserPage } from './pages/UserPage/UserPage';
import { WhyPage } from './pages/WhyPage/WhyPage';
import { CoursePage } from './pages/CoursePage/CoursePage';

//PROVIDERS
import { UserProvider } from './context/UserContext/UserContext';
import { BasketProvider } from './context/BasketContext/BasketContext';


function App() {
  return (
    <UserProvider>
    <BasketProvider>
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
              <Route exact path="/user/:id" component={UserPage}/>
              <Route exact path="/course/:id" component={CoursePage}/>
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
    </BasketProvider>
    </UserProvider>
  );
}

export default App;
