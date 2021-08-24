import React from 'react'
import { Link } from 'react-router-dom'

//navbar components
import { SlideMenu } from './SlideMenu'
import { LoginButton } from './LoginButton'
import { SignUpButton } from './SignUpButton'
import { UserLogged } from './UserLogged'

//style
import { ContainerNav } from './styles'

//service
import { useWindowSize } from '../../services/windowDimensions/windowDimensions'

//context
import { User } from '../../context/UserContext'

export function NavBar() {
  const { width } = useWindowSize()
  const { user } = User()

  return (
    <ContainerNav>
      <Link to='/'>
        <img src='./testCourse.png' alt='topCourses Logo' />
      </Link>
      {width > 680 ? (
        <ul>
          <a href='/'>
            <li>Home</li>
          </a>
          <a href='/WhyPage'>
            <li>Why testCourses?</li>
          </a>
        </ul>
      ) : (
        <SlideMenu />
      )}

      { !user ? (
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
