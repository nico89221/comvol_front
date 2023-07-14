import React from 'react';

function Carrusel(props) {


    return (

        <div>
            <img src={props.urlImagenPersona} alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h5>{props.tituloProyecto}</h5>
                <p>{props.descripcionProyecto}</p>
            </div>
        </div>

    )
}



export default Carrusel;


