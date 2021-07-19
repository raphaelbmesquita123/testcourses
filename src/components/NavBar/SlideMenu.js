import { SlideContainer } from './styles'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaWindowClose, FaAngleRight } from "react-icons/fa";



export function SlideMenu() {
    const [ slideOpen, setSlideOpen ] = useState(false)

    return (
        <SlideContainer style={{ left:`${ slideOpen ? '0' : '-100%'}`}}>
            <div>
                < FaWindowClose className='closeSlide' onClick={() => setSlideOpen(false)}/>
                < FaAngleRight className='openSlide' onClick={() => setSlideOpen(true)} />
                <ul>
                    <Link to='#' onClick={() => setSlideOpen(false)}>
                        <li>Home</li>
                    </Link>
                    <Link to='#' onClick={() => setSlideOpen(false)}>
                        <li>Contact Us</li>
                    </Link>
                    <Link to='#' onClick={() => setSlideOpen(false)}>
                        <li>Why testCourses?</li>
                    </Link>
                </ul>
            </div>
        </SlideContainer>
    )
}
