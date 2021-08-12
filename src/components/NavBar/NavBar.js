import React from 'react'
import { ContainerNav } from './styles'
import { SlideMenu } from './SlideMenu'
import { useWindowSize } from '../../services/windowDimensions';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';
import { UserLogged } from './UserLogged/UserLogged';

import { User } from '../../context/UserContext/UserContext';
import { Link } from 'react-router-dom';

export function NavBar() {
    const { width } = useWindowSize()
    const { user } = User()

    return (
        <ContainerNav>
            <Link to='/'>
                <img src="./testCourse.png" alt="topCourses Logo" />
            </Link>
            {width > 680 
            ?
                <ul>
                    <a href='/'>
                        <li>Home</li>
                    </a>
                    <a href='#contactUs'>
                        <li>Contact Us</li>
                    </a>
                    <a href='/WhyPage' >
                        <li>Why testCourses?</li>
                    </a>
                </ul>
            :
            <SlideMenu />
            }

            { user === null ? 
            <div>
                <LoginButton/>
                <SignUpButton/>
            </div>
            :
            <UserLogged />
            }
        </ContainerNav>
    )
}
