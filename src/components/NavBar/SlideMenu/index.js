import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaWindowClose, FaAngleRight } from 'react-icons/fa'

//styles
import { SlideContainer } from './styles'

export function SlideMenu() {
  const [slideOpen, setSlideOpen] = useState(false)

  return (
    <SlideContainer 
    left={ slideOpen ? '0' : '-100%' }>
      
      <div>
        <FaWindowClose
          className='closeSlide'
          onClick={() => setSlideOpen(false)}
        />
        <FaAngleRight
          className='openSlide'
          onClick={() => setSlideOpen(true)}
          display={slideOpen ? 'none' : 'block' }
        />
        <ul>
          <Link to='/' onClick={() => setSlideOpen(false)}>
            <li>Home</li>
          </Link>
          <Link href='/WhyPage' onClick={() => setSlideOpen(false)}>
            <li>Why testCourses?</li>
          </Link>
        </ul>
      </div>
    </SlideContainer>
  )
}
