import React, { useRef } from 'react'
import "./contact.css"
import emailjs from 'emailjs-com';

import {MdEmail} from "react-icons/md"


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_oyzszy5', 'template_4k1m3cl', form.current, 'cgsJTN0b8KDofEW6Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        e.target.reset()
      };

  return (
    <section id="contact">
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <div className="contact__option">
                    <MdEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    <h5>jongordon06@gmail.com</h5>
                    <a href="mailto:jongordon06@gmail.com">Send a Message</a>
                </div>

            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder='Your Full Name' required/>
                <input type="email" name="email" placeholder='Your Email' required/>
                <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
        
    </section>
  )
}

export default Contact