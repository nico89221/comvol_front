import React from 'react';
import { img } from 'bootstrap'

function Tarjeta(props) {

    let urlImg = props.urlImagenPersona;
    let urlDetalle = "detalle_proyecto/" + props.idProyecto;
    return (
        <div class="card" style={{ width: "18rem" }}>
            <img class="card-prueba" style={{height:240}} src={urlImg} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title"><b>{props.tituloProyecto}</b></h5>
                <p class="card-text proyecto-desc">{props.descripcionProyecto}</p>
                <p class="card-text"><b>Estado:</b> {props.descripcionEstado}</p>
                <p class="card-text"><b>Categoria:</b> {props.descripcionCategoria}</p>
                <p class="card-text"><b>Cantidad de integrantes:</b> {props.limitePersonasProyecto}</p>
                <div class="btn-detalle-container">
                    <a href={urlDetalle} class="btn btn-primary btn-detalle">Ver proyecto</a>
                </div>
            </div>
        </div>



    )
}



export default Tarjeta;


