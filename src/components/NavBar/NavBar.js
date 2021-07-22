import React,{ useState } from 'react'
import { ContainerNav } from './styles'
import { Link } from 'react-router-dom'
import { SlideMenu } from './SlideMenu'
import { useWindowSize } from '../../services/windowDimensions';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';
import { IsUserLogged } from './isUserLogged.js/IsUserLogged';

export function NavBar() {
    const { width } = useWindowSize()
    const [ logged, setLogged ] = useState(true)
        
    return (
        <ContainerNav>
            <img src="./testCourse.png" alt="topCourses Logo" />
            {width > 680 
            ?
                <ul>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
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
            { logged ? 
            <IsUserLogged />
            :
            <div>
                <LoginButton/>
                <SignUpButton/>
            </div>
            }
        </ContainerNav>
    )
}
