import React from 'react'
import "./home.css"
import IcoRe from "../props/fondo1.png"
import { BsMouse } from 'react-icons/bs';
import {BsChevronDoubleDown} from "react-icons/bs"
import Perfil from "../props/perfilb.jpg"



const Home = () => {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img className="img-principal" src={Perfil} alt='perfil' />
      </div>
      <div className="flecha">
      <a href="#about"><BsChevronDoubleDown/></a>

      </div>


      <a href='#footer' className='scroll-down'>
        <hr />
        <BsMouse className='scroll' />
        <hr />
      </a>

     
    </div>
  );
}
export default Home