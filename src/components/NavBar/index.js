import React from 'react'
import { useLocation } from 'react-router-dom'

//navbar components
import { SlideMenu } from './SlideMenu'
import { LoginButton } from './LoginButton'
import { SignUpButton } from './SignUpButton'
import { UserLogged } from './UserLogged'

//style
import { ContainerNav, MenuButton } from './styles'

//service
import { useWindowSize } from '../../services/windowDimensions/windowDimensions'

//context
import { User } from '../../context/UserContext'

export function NavBar() {
  const { width } = useWindowSize()
  const { user } = User()
  const { pathname }  = useLocation()
  return (
    <ContainerNav>
      <a href='/'>
        <img src='./testCourse.png' alt='topCourses Logo' />
      </a>
      {width > 680 ? (
        <ul>
          <MenuButton
            color={pathname === '/' && 'var(--white)'}
            marginBottom={pathname === '/' && '4px solid var(--blue-500)'}
            href='/'
          >
            Home
          </MenuButton>
          <MenuButton
            href='/WhyPage'
            color={pathname === '/WhyPage' && 'var(--white)'}
            marginBottom={pathname === '/WhyPage' && '4px solid var(--blue-500)'}
          >
            Why testCourses?
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
