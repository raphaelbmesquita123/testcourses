import React, { useState } from 'react'
import { FaWindowClose, FaAngleRight } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

//styles
import { SlideContainer, SlideMenuButton } from './styles'

export function SlideMenu() {
  const [slideOpen, setSlideOpen] = useState(false)
  const { pathname }  = useLocation()

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
          <SlideMenuButton 
            href='/' onClick={() => setSlideOpen(false)}
            color={pathname === '/' ? 'var(--white)' : 'var(--blue-500)'}
            marginLeft={pathname === '/' ? '4px solid var(--blue-500)' : 'var(--blue-500)'}
            >
            Home
          </SlideMenuButton>
          <SlideMenuButton 
            href='/WhyPage' onClick={() => setSlideOpen(false)}
            color={pathname === '/WhyPage' ? 'var(--white)' : 'var(--blue-500)'}
            marginLeft={pathname === '/WhyPage' ? '4px solid var(--blue-500)' : 'var(--blue-500)'}
            >
            Why testCourses?
          </SlideMenuButton>
        </ul>
      </div>
    </SlideContainer>
  )
}
