import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/dalle-image-v3.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello, I'm</h5>
            <h1>Jonathan Gordon</h1>
            <h5 className='text-light'>Research Scientist at OpenAI</h5>
            <HeaderSocials />
            <CTA />
            
            <div className="me">
                <img src={ME} alt="me"/>
            </div>
            
        </div>
     </header>
  )
}

export default Header