import React from 'react';

function CarruselProyecto(props) {

    console.log(props)
    return (

        <div class="carousel-item active">
            <img class="d-block w-100" src={props.urlImagenPersona} alt="First slide"/>
        </div>

    )
}



export default CarruselProyecto;


