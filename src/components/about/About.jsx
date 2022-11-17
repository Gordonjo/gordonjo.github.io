import React from 'react'
import "./about.css"
import ME from "../../assets/site-image.jpeg"

const about = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h3>
                I am research scientist at OpenAI, where I work on large language models. Is particular, I am interested in applying these models to programming tasks. Code provides a rich and structured interface to the real world, and I believe it is one of the most powerful avenues for pursuing artificial intelligence. 
              </h3>
            </article>
            
            <article className='about__card'>
              <h3>
              Before that, I received my Ph.D. from the University of Cambridge, supervised by Dr José Miguel Hernández-Lobato and advised by Dr Richard Turner. My research interests included developing probabilistic models (typically parameterized by deep neural networks) and associated scalable approximate inference procedures.
              </h3>
            </article>
              
          </div>
        </div>
      </div>
    </section>
  )
}

export default about