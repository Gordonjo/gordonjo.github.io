import React from 'react'
import "./footer.css"

import {FaRobot} from "react-icons/fa"
import {FiLinkedin} from "react-icons/fi"
import {SiGooglescholar} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
import {ImTwitter} from "react-icons/im"

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'><FaRobot/></a>
        
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#timeline">Experience</a></li>
            <li><a href="#publications">Publications</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://www.linkedin.com/in/jonathan-gordon-7bb49a7a/"><FiLinkedin/></a>
            <a href="https://scholar.google.com/citations?hl=en&user=IZGi3pEAAAAJ"><SiGooglescholar/></a>
            <a href="https://github.com/Gordonjo"><BsGithub/></a>
            <a href="https://twitter.com/GordonJo76"><ImTwitter/></a>
        </div>

        <div className="footer__copyright">
            <small>&copy; Gordonjo. All rights reserved.</small>
        </div>
        
    </footer>
  )
}

export default Footer