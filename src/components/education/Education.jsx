import React from 'react'
import "./education.css"

import {SiOpenai} from "react-icons/si"
import {RiFacebookCircleLine} from "react-icons/ri"
import {BsMicrosoft} from "react-icons/bs"

const Education = () => {
  return (
    <section id="education">
        <h2>Education</h2> 

        <div className="education__container">
            
            <div className="education__content">
                <div className="education__content__top">
                    <h2>OpenAI</h2>
                    <h3>Research Scientist</h3>
                    <h4>2020 - Present</h4>
                    <p>
                        Working on the Program Synthesis team and teaching OpenAI's biggest and best language models to write code.
                    </p>
                </div>
                <SiOpenai className='education__icon' />
            </div>

            <div className="education__content">
                <div className='education__content__top'>
                    <h2>Facebook AI Research</h2>
                    <h3>Research Science Intern</h3>
                    <h4>Summer 2019</h4>
                    <p>
                        Developing methods to encode symmetries in natural language into encoder-decoder neural architectures.
                    </p>
                </div>
                <RiFacebookCircleLine className='education__icon' />
            </div>

            <div className="education__content">
                <div className='education__content__top'>
                    <h2>Microsoft Research</h2>
                    <h3>Research Science Intern</h3>
                    <h4>Summer 2018</h4>
                    <p>
                        Developing probabilistic models and inference algorithms for compute efficient algorithms of neural architecture search. 
                    </p>
                </div>
                <BsMicrosoft className='education__icon' />
            </div>

        </div>

    </section>
  )
}

export default Education