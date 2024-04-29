import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './assets/data_test.json'
import Aptitudes from './components/Aptitudes'
import TipoPago from './components/TipoPago'

import { GiPositionMarker } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdCalendarMonth } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";

function App() {

  const peliculasImg = require.context('./assets/img')

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
                      <img src={peliculasImg(`./offiemedicas.png`)} width='80' height='70' alt="" />
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
