import React from 'react'
import { ContainerNav } from './styles'
import { Link } from 'react-router-dom'
import { SlideMenu } from './SlideMenu'
import { useWindowSize } from '../../services/windowDimensions';
import { LoginButton } from './LoginButton';
import { SignUpButton } from './SignUpButton';

export function NavBar() {
    const { width } = useWindowSize()
    
    return (
        <ContainerNav>
            <img src="./testCourse.png" alt="topCourses Logo" />
            {width > 680 
            ?
                <ul>
                    <Link to='#'>
                        <li>Home</li>
                    </Link>
                    <Link to='#'>
                        <li>Contact Us</li>
                    </Link>
                    <Link to='#'>
                        <li>Why testCourses?</li>
                    </Link>
                </ul>
            :
            <SlideMenu />
            }
            <div>
                <LoginButton/>
                <SignUpButton/>
            </div>
        </ContainerNav>
    )
}
