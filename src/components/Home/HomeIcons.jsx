import React from "react";
import Icono1 from "../../assets/img/Servicios/icono.png";
import Icono2 from "../../assets/img/Servicios/mundo.png";
import { FiArrowDownCircle } from "react-icons/fi";

const HomeIcons = () => {
  return (
    <section id="manifiesto" className="container">
      <div className="container-icons">
        <div>
          <img src={Icono1} alt="icono 1" />
          <h2>Tus ideas</h2>
          <p>Manifesta tus ideas que nosotros las volvemos realidad</p>
        </div>
        <div>
          <img src={Icono2} alt="icono 2" />
          <h2>En todo el mundo</h2>
          <p>
            Diseños de alta calidad para Argentina como para el resto del mundo
          </p>
        </div>
      </div>
      <a href="#servicios">
        Nuestros servicios <FiArrowDownCircle />
      </a>
    </section>
  );
};

export default HomeIcons;