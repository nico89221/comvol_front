import React from 'react';
import { img } from 'bootstrap'

function Tarjeta(props) {

    let urlImg = props.urlImagenPersona;
    let urlDetalle = "detalle_proyecto/" + props.idProyecto;
    console.log(props)

    let detalle = () => {

        window.location = urlDetalle;
    }
    
    return (
        <div class="card" style={{ width: "18rem", marginRight: "10px", marginTop: "10px" }}>
            <img class="card-prueba" style={{ height: 240 }} src={urlImg} alt="Card image cap"></img>
            <div class="card-body">
                <h5 class="card-title"><b>{props.tituloProyecto}</b></h5>
                <p class="card-text proyecto-desc">{props.descripcionProyecto}</p>
                <p class="card-text"><b>Puesto Solicitado: </b>
                                {
                                    props.rolesProyecto?.map(proy => {
                                        return (
                                            <div>
                                                {proy}
                                            </div>
                                        )
                                    })
                                }
                            </p>
                <p class="card-text"><b>Estado:</b> {props.descripcionEstado}</p>
                <p class="card-text"><b>Categoria:</b> {props.descripcionCategoria}</p>
                <p class="card-text"><b>Cantidad de integrantes:</b> {props.limitePersonasProyecto}</p>
                <div class="btn-detalle-container">
                    <div class="button-container-2">
                        <span class="mas">Detalle</span>
                        <button type="button" name="Hover" onClick={detalle} >Ver</button>
                    </div>
                </div>
            </div>
        </div>



    )
}



export default Tarjeta;


