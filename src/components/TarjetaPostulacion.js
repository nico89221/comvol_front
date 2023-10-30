import React from 'react';
import { img } from 'bootstrap'

function TarjetaPostulacion(props) {

    let detalle = () => {

        window.location = urlDetalle;
    }

    let urlImg = props.imgProyecto;
    let urlDetalle = "detalle_proyecto/" + props.idProyecto;
    return (
        <div class="card" style={{ width: "18rem" , marginBottom:"12px"}}>
            <img class="card-img-top" src={urlImg} alt="Card image cap" style={{height:"300px"}}></img>
            <div class="card-body">
                <label><b>Titulo:</b></label>
                <p class="card-text"><b>{props.tituloProyecto}</b></p>
                <label><b>Estado:</b></label>
                <p class="card-text">{props.estadoPostulacion}</p>
                <label><b>Categoria:</b></label>
                <p class="card-text">{props.descripcionCategoria}</p>
                <label><b>Postulado a:</b></label>
                <p class="card-text">{props.rolPostulado}</p>
                <div class="button-container-2">
                        <span class="mas">Proyecto</span>
                        <button type="button" name="Hover" onClick={detalle} >Ver</button>
                    </div>
            </div>
        </div>



    )
}



export default TarjetaPostulacion;


