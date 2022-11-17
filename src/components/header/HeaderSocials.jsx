import React from 'react'
import {FiLinkedin} from "react-icons/fi"
import {SiGooglescholar} from "react-icons/si"
import {BsGithub} from "react-icons/bs"
import {ImTwitter} from "react-icons/im"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://scholar.google.com/citations?hl=en&user=IZGi3pEAAAAJ" target="_blank" rel="noreferrer"><SiGooglescholar/></a>
        <a href="https://github.com/Gordonjo" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/GordonJo76" target="_blank" rel="noreferrer"><ImTwitter/></a>
        <a href="https://www.linkedin.com/in/jonathan-gordon-7bb49a7a/" target="_blank" rel="noreferrer"><FiLinkedin/></a>
    </div>
  )
}

export default HeaderSocials