import React from 'react'
import "./nav.css"
import {BiHomeAlt} from "react-icons/bi"
import {BiUser} from "react-icons/bi"
import {BsFillBriefcaseFill} from "react-icons/bs"
import {RiArticleFill} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"
import { useState } from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active': ""}><BiHomeAlt/></a>
        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active': ""}><BiUser/></a>
        <a href="#timeline" onClick={() => setActiveNav("#timeline")} className={activeNav === "#timeline" ? 'active': ""}><BsFillBriefcaseFill/></a>
        <a href="#publications" onClick={() => setActiveNav("#publications")} className={activeNav === "#publications" ? 'active': ""}><RiArticleFill/></a>
        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active': ""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav