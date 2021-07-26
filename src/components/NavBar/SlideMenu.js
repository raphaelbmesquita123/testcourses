import { SlideContainer } from './styles'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { FaWindowClose, FaAngleRight } from "react-icons/fa";
import { User } from '../../context/UserContext/UserContext';



export function SlideMenu() {
    const [ slideOpen, setSlideOpen ] = useState(false)
    const { isUserLogged } = User()

    return (
        <SlideContainer style={{ left:`${ slideOpen ? '0' : '-100%'}`}}>
            <div>
                < FaWindowClose 
                    className='closeSlide' 
                    onClick={() => setSlideOpen(false)}
                    />
                < FaAngleRight 
                    className='openSlide' 
                    onClick={() => setSlideOpen(true)} 
                    style={{ display: slideOpen ? 'none' : 'block'}}
                    />
                <ul>
                    <Link to='/' onClick={() => setSlideOpen(false)}>
                        <li>Home</li>
                    </Link>
                    <a href='#contactUs' onClick={() => setSlideOpen(false)}>
                        <li>Contact Us</li>
                    </a>
                    <a href='/WhyPage' onClick={() => setSlideOpen(false)}>
                        <li>Why testCourses?</li>
                    </a>
                    {
                        isUserLogged ?
                        ''
                        :
                        <a href='/Basket' onClick={() => setSlideOpen(false)}>
                            <li>Basket</li>
                        </a>
                    }
                </ul>
            </div>
        </SlideContainer>
    )
}
