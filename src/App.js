import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { ToastContainer } from 'react-toastify'

// styles
import { GlobalStyle } from './styles/global'
import { FooterContainer } from './styles/styles'
import 'react-toastify/dist/ReactToastify.css'

//pages
import { HomePage } from './pages/HomePage'
import { UserPage } from './pages/UserPage'
import { WhyPage } from './pages/WhyPage/'
import { CoursePage } from './pages/CoursePage'
import { CourseDescriptionPage } from './pages/CourseDescriptionPage'
import { CertificateValidationPage } from './pages/CertificateValidationPage'

//components
import { NavBar } from './components/NavBar'

//providers
import { UserProvider } from './context/UserContext'
import { BasketProvider } from './context/BasketContext'

function App() {
  return (
    <UserProvider>
      <BasketProvider>
        <BrowserRouter>
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <GlobalStyle />
          <NavBar />

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/WhyPage' component={WhyPage} />
            <Route exact path='/user/:id' component={UserPage} />
            <Route exact path='/course/:id' component={CoursePage} />
            <Route
              exact
              path='/course/description/:id'
              component={CourseDescriptionPage}
            />
            <Route
              exact
              path='/CertificateValidation'
              component={CertificateValidationPage}
            />
          </Switch>

          <FooterContainer>
            <section>
              <Link to='/'>testcourse@gmail.com</Link>
              <div>
                <Link to='/'>
                  <FaFacebook />
                </Link>
                <Link to='/'>
                  <FaInstagram />
                </Link>
              </div>
              <small>2021 testcourse all rights reserved</small>
            </section>
          </FooterContainer>
        </BrowserRouter>
      </BasketProvider>
    </UserProvider>
  )
}

export default App
