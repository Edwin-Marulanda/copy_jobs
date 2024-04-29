import React from "react";

const Aptitudes = ({ aptitudes }) => {
    return (
        <section className="d-flex align-items-center flex-row ">
            {
                aptitudes.map((aptitud, index) => (
                    <span key={index} className="border pe-3 ps-3 border-secondary rounded-pill d-flex align-items-center h-50 me-1">
                        {aptitud}
                    </span>
                ))
            }
        </section>
    );
}


export default Aptitudes