import React from "react";
import { CiMoneyBill } from "react-icons/ci";

const TipoPago = ({ tipo_pago }) => {
    return (
        <span >
           <CiMoneyBill /> ${tipo_pago.pago} {tipo_pago.tipo}
        </span>
    );
}


export default TipoPago