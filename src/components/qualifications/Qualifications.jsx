import React from 'react'
import "./qualifications.css"
import img1 from "../props/p1.png"
import img2 from "../props/p2.png"
import img3 from "../props/p3.png"

import { MdOutlineImportantDevices } from "react-icons/md";




const Qualifications = () => {
  return (
<section id="portfolio">
  <div className="container portfolio">
  <MdOutlineImportantDevices style={{fontSize:30}}/>
    <h2>Proyectos </h2>
    <div className="works">
      <div className="item-work">
        <img src= {img1} alt="proyectos" />
        <h3>Proyecto 1</h3>
        <span>Mi sitio web personal como freelance. Realizado con React. </span>
      <div className="butons">
      <a href="https://bohorquezdev-q87xb4dpe-ivanbohor.vercel.app/" target="_blank" >Ver Deploy</a> <a href="https://github.com/ivanbohor/bohorquezdev" target="_blank">Ver Repo</a>
      </div>
      </div>
      <div className="item-work">
        <img src={img2} alt="" />
        <h3>Proyecto 2</h3>
        <span>Portfolio para un profesional, hecho con react y styled components. </span>
        <div className="butons">
      <a href="https://portfolio-db-test.vercel.app/"target="_blank">Ver Deploy</a> <a href="https://github.com/ivanbohor/portfolio-DB"target="_blank">Ver Repo</a>
      </div>
      </div>
      <div className="item-work">
        <img src={img3} alt="proyectos" />
        <h3>Proyecto 3</h3>
        <span>Landingpage para un agencia de marketing, hecho con react.</span>
        <div className="butons">
      <a href="https://francisco-cernusco-site.vercel.app/"target="_blank">Ver Deploy</a> <a href="https://github.com/ivanbohor/siteMarketing-Ecommerce"target="_blank">Ver Repo</a>
      </div>
      </div>
      <div className="item-work">
        <img src={img1}  alt="proyectos" />
        <h3>Proyecto 4</h3>
        <span>Front de un ecommerce, simulacion de pasarela de pagos. Hecho con JavaScript Vanilla y Bootstrap </span>
        <div className="butons">
      <a href="https://ivanbohor.github.io/BarEcommerce/index.html" target="_blank">Ver Deploy</a> <a href="https://github.com/ivanbohor/BarEcommerce"target="_blank">Ver Repo</a>
      </div>
      </div>
    </div>
</div>
    
  </section>
)
}

export default Qualifications