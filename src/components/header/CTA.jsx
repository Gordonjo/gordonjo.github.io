import React from 'react'
import CV from '../../assets/JonathanGordonCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
         <a href={CV} download className='btn'>Download CV </a>
         <a href="#contact" className='btn'>Contact me</a>
    </div>
  )
}

export default CTA