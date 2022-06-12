import React from 'react'
import "./about.css"
import Buttons from '../button/Button';
import {AiFillHtml5} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {SiReact}  from "react-icons/si"
import  {SiRedux}  from "react-icons/si"
import {SiStyledcomponents} from "react-icons/si"

import {BsBootstrap} from "react-icons/bs"
import {SiFirebase} from "react-icons/si"
import {IoLogoJavascript}  from "react-icons/io"
import {BsGithub} from "react-icons/bs"
import {BsCheck2Circle} from "react-icons/bs"

const About = () => {
  return (
  <div id="about" className="container about-container">
     <AiOutlineUser style={{fontSize:"30"}}/>
      <h2>About Me</h2>
        <div className="text-about">
        <p>
         Soy estudiante de la carrera de Analisis de Sistemas en el instituto IRSO, realice la carrera de Front-End Developer con React en Coder House,
         me apasiona el mundo del desarrollo y diseño web.</p>
         <p>Actualmente me desempeño de manera freelance en diseño y desarollo de webs/landingpages.</p>
        <p> Tengo como objetivo integrar un equipo, con el rol de desarrollador, en una empresa en la que pueda poner 
         en practica mis conocimientos, seguir aprendiendo y capacitandome.
        </p>
        </div>
      
      <div className="puntos">
      <BsCheck2Circle style={{fontSize:30}}/> <span className="punto"> CABA  (Arg) </span>
      <BsCheck2Circle style={{fontSize:30}}/><span className="punto">Trabajo Remoto/Presencial </span>
      <BsCheck2Circle style={{fontSize:30}}/><span className="punto">Disponibilidad Full-Time </span>
      </div>
      <h3>Skills</h3> 
      <div className="itemSk">
        <AiFillHtml5 alt="ico"  className="item-sk" /> <span>HTML</span> 
        <DiCss3  alt="ico"   className="item-sk"/><span>CSS</span>
        <IoLogoJavascript alt="ico"  className="item-sk"/><span>JavaScript</span>
        <SiReact classNamealt="ico" className="item-sk"/><span>React</span>
       <SiRedux  alt="ico" className="item-sk"/><span>Redux</span>
        <SiStyledcomponents alt="ico"   className="item-sk"/><span> Styled Components</span>
        <BsBootstrap alt="ico"  className="item-sk"/> <span>Bootstrap</span>
        <SiFirebase alt="ico"  className="item-sk"/><span>Firebase</span>
       <BsGithub alt="ico"  className="item-sk"/><span>GitHub</span>
      </div>

      <Buttons />
  </div>
);
}
export default About