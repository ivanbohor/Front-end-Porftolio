import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#portfolio" className="btn pri">
       Proyectos
      </a>
      <a href="#contact" className="btn sec">
        Contacto
      </a>
    </div>
  );
}

export default Buttons;