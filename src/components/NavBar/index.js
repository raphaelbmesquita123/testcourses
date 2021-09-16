import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useIdleTimer } from 'react-idle-timer'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

//navbar components
import { SlideMenu } from './SlideMenu'
import { LoginButton } from './LoginButton'
import { SignUpButton } from './SignUpButton'
import { UserLogged } from './UserLogged'

//style
import { ContainerNav, MenuButton, LogoutContainer } from './styles'

//service
import { useWindowSize } from '../../services/windowDimensions/windowDimensions'

//context
import { User } from '../../context/UserContext'

export function NavBar() {
  const { width } = useWindowSize()
  const { user, userLogOut } = User()
  const { pathname } = useLocation()
  const [showBanner, setShowBanner] = useState(false)
  const [isUserActive, setIsUserActive] = useState(true)
  const history = useHistory()

  const handleOnIdle = () => {
    if (user) {
      setShowBanner(true)
      setIsUserActive(false)
      if (!isUserActive) {
        setTimeout(() => {
          history.push('/')
          setShowBanner(false)
          toast.info('Sorry we logged you out because there was no activity')
          userLogOut()
        }, 30000)
      }
    }
  }


  const handleUserStillActive = () => {
    setShowBanner(false)
    setIsUserActive(true)
  }

  useIdleTimer({
    timeout: 5 * 60 * 1000,
    onIdle: handleOnIdle,
    debounce: 500,
  })

  return (
    <ContainerNav>
      <LogoutContainer display={showBanner ? 'flex' : 'none'}>
        <div>
          <h1>Are you still there ?</h1>
          <h3>After 5 minutes of inactivity you will be logout</h3>
          <h3>
            You have <span>30</span> seconds before being logged out
          </h3>
        </div>
        <button onClick={() => handleUserStillActive()}>Yes</button>
      </LogoutContainer>
      <a href='/'>
        <img src='./testCourse.png' alt='topCourses Logo' />
      </a>
      {width > 800 ? (
        <ul>
          <MenuButton
            color={pathname === '/' ? 'var(--white)' : 'var(--blue-500)'}
            marginBottom={
              pathname === '/' ? '4px solid var(--blue-500)' : 'var(--blue-500)'
            }
            href='/'
          >
            Home
          </MenuButton>
          <MenuButton
            href='/WhyPage'
            color={pathname === '/WhyPage' ? 'var(--white)' : 'var(--blue-500)'}
            marginBottom={
              pathname === '/WhyPage'
                ? '4px solid var(--blue-500)'
                : 'var(--blue-500)'
            }
          >
            Why testCourses?
          </MenuButton>
          <MenuButton
            href='/CertificateValidation'
            color={
              pathname === '/CertificateValidation'
                ? 'var(--white)'
                : 'var(--blue-500)'
            }
            marginBottom={
              pathname === '/CertificateValidation'
                ? '4px solid var(--blue-500)'
                : 'var(--blue-500)'
            }
          >
            Certificate Validation
          </MenuButton>
        </ul>
      ) : (
        <SlideMenu />
      )}

      {!user ? (
        <div>
          <LoginButton />
          <SignUpButton />
        </div>
      ) : (
        <UserLogged />
      )}
    </ContainerNav>
  )
}
