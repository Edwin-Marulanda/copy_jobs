import React from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
//import iconosBeneficios from './iconosBeneficios'; // Importa el mapeo de iconos de beneficios

import { FaStar, FaMedkit, FaBriefcase, FaCalendarAlt, FaUserShield, FaClock, FaMoneyBillWave, FaRegSmileBeam, FaTooth } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";

// Define el mapeo de beneficios a iconos
const iconosBeneficios = {
    fiestas: FaRegSmileBeam, // Icono para Fiestas
    capacitaciones: RiFileList3Line, // Icono para Capacitaciones
    seguro_medico: FaMedkit, // Icono para Seguro médico
    bono_anual: FaStar, // Icono para Bono anual
    seguro_vida: FaUserShield, // Icono para Seguro de vida
    teletrabajo: FaBriefcase, // Icono para Teletrabajo
    seguro_salud: FaMedkit, // Icono para Seguro de salud
    flexibilidad_horaria: BiTimeFive, // Icono para Flexibilidad horaria
    seguro_dental: FaTooth, // Icono para Seguro dental
    dias_libres_extra: FaCalendarAlt, // Icono para Días libres extra
    horario_flexible: FaClock, // Icono para Horario flexible
    bono_desempeno: FaMoneyBillWave // Icono para Bono de desempeño
};

const Beneficios = ({ beneficios }) => {
  return (
    <div className="d-flex align-items-center flex-row mt-1">
      {Object.keys(beneficios).map((beneficio, index) => (
        beneficios[beneficio] === 'S' && iconosBeneficios[beneficio] ? (
          <OverlayTrigger
            key={index}
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{beneficio}</Tooltip>}
          >
            <div className="border border-secondary rounded-pill d-flex align-items-center justify-content-center h-50 m-1" style={{ width: '40px' }}>
              {React.createElement(iconosBeneficios[beneficio])}
            </div>
          </OverlayTrigger>
        ) : null
      ))}
    </div>
  );
};

export default Beneficios;
