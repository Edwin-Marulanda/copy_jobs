import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './assets/data_test.json'
import Aptitudes from './components/Aptitudes'
import TipoPago from './components/TipoPago'
import Beneficios from './components/Beneficios'; 

import { GiPositionMarker } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";

import { FaStar, FaMedkit, FaBriefcase, FaBuilding, FaUsers, FaCalendarAlt, FaUserClock, FaUserShield, FaUserFriends, FaClock, FaMoneyBillWave, FaRegSmileBeam, FaTooth } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { BiTimeFive } from "react-icons/bi";
import { IoMdPeople, IoMdBusiness } from "react-icons/io";

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

function App() {

    const peliculasImg = require.context('./assets/img/')

    return (
        <div className='container'>
            <div className="row bg-primary">
                <div className="col-6 d-flex justify-content-end">
                    <input className='form-control w-75 m-2' placeholder='Bucar por cargo, salario, ubicación o empresa' />
                </div>
                <div className="col-6">

                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {
                        data.datos.map((data) => (
                            <div className="card border mt-3" key={data.id}>
                                <div className="card-body">
                                    <div className='row'>
                                        <div className='col-1'>
                                            <img src={peliculasImg(`./${data.url_img}`)} width='80' height='70' alt="" />
                                        </div>
                                        <div className="col-11">
                                            <div className="row">
                                                <div className='col-12 d-flex flex-row'>
                                                    <h4 className='me-2'>{data.puesto}</h4> {<Aptitudes aptitudes={data.aptitudes} />}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2">
                                                    <BsBuildings /> {data.empresa}
                                                </div>
                                                <div className="col-2">
                                                    <GiPositionMarker /> {data.ubicacion}
                                                </div>
                                                <div className="col-2">
                                                    {<TipoPago tipo_pago={data.tipo_pago} />}
                                                </div>
                                                <div className="col-2">
                                                    <IoPeopleOutline /> {data.vacantes} Vacantes
                                                </div>
                                                <div className="col-2">
                                                    <MdCalendarMonth /> about {data.publicacion} hours ago
                                                </div>
                                                <div className="col-2">
                                                    {/* Renderiza los iconos de beneficios */}
                                                    {/*Object.keys(data.beneficios).map((beneficio, index) => {
                                                    if (data.beneficios[beneficio] === 'S' && iconosBeneficios[beneficio]) {
                                                        const Icono = iconosBeneficios[beneficio];
                                                        return <Icono key={index} />;
                                                    }
                                                    return null;
                                                    })*/}
                                                    <Beneficios beneficios={data.beneficios} />
                                                </div>
                                            </div>

                                        </div>





                                    </div>

                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>


        </div>
    );
}

export default App;
