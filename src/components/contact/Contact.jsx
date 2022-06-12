import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { BiMessageRoundedDots } from "react-icons/bi";
import {RiLinkedinFill} from "react-icons/ri";

import { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  const formRef= useRef();
  const [done, setDone] = useState(false)

  const handleSubmit=(e) => {
    e.preventDefault ();
    emailjs.sendForm('ivan', 'template_pk0ccje', formRef.current, 'Em0CR3lQwjM_nbFru')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
}

  return (
    <section id='contact' className="container contact">
      <div className="tit">
              <BiMessageRoundedDots style={{fontSize:30}}/>
              <h2>Contact Me</h2>
              </div>
        <div className="contactss"> 
          <div className="contact-options">
            <article className='contact-opt'>
              <MdOutlineMarkEmailUnread style={{fontSize:25}} className='contact-opt-icon' />
              <h4>Email</h4>
              <h5>ivan.olivera07@hotmail.com</h5>
              <a href="mailto:ivan.olivera07@hotmail.com" target="_blank"> Enviar Mensaje</a>
            </article>
            <article className='contact-opt'>
              <RiLinkedinFill  style={{fontSize:25}} className='contact_option-icon' />
              <h4>Linkedin</h4>
              <a href="https://www.linkedin.com/in/ivanoliverab/" target="_blank"> Enviar Mensaje</a>
            </article>
            <article className='contact-opt'>
              <BsWhatsapp style={{fontSize:25}} className='contact-opt-icon' />
              <h4>Whatsapp</h4>
              <h5>+541123920404</h5>
              <a href="https://api.whatsapp.com/send?phone=541123920404" target="_blank"> Enviar Mensaje</a>
            </article>
            </div>
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" name='user_name' placeholder='Nombre' required />
              <input type="text" name='user_subjet' placeholder='Asunto' required />
              <input type="email" name='email' placeholder='Email' required />
              <textarea name="message" rows="7" placeholder='Tu Mensaje' required></textarea>
              <button type='submit' >Enviar</button>
              {done && "  Mensaje enviado! Gracias."}

            </form>
          </div>
        </div> 
    </section>
  )
}

export default Contact