import React from 'react'
import { ContainerNav } from './styles'
import { SlideMenu } from './SlideMenu'
import { useWindowSize } from '../../services/windowDimensions';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';
import { UserLogged } from './UserLogged/UserLogged';

import { User } from '../../context/UserContext/UserContext';

export function NavBar() {
    const { width } = useWindowSize()
    const { isUserLogged } = User()
        
    return (
        <ContainerNav>
            <img src="./testCourse.png" alt="topCourses Logo" />
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
                    {
                        isUserLogged ? 
                        ''
                        :
                        <a href='/Basket' >
                            <li>Basket</li>
                        </a>

                    }
                </ul>
            :
            <SlideMenu />
            }
            { isUserLogged ? 
            <UserLogged />
            :
            <div>
                <LoginButton/>
                <SignUpButton/>
            </div>
            }
        </ContainerNav>
    )
}
