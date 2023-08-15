import React, { useEffect, useState } from 'react';
import {

    LinkedinShareButton,
    LinkedinIcon,

} from "react-share";


function TarjetaParticipacion(props) {

    let urlImg = props.urlImagenProyecto;
    let urlDetalle = "detalle_proyecto/" + props.idProyecto;
    const [rechazar, setRechazar] = useState({ idEstadoPersona: 3 });
    let url = "https://main--stellar-bublanina-20e9ef.netlify.app/detalle_proyecto/" + props.idProyecto
    let title = "Proyecto en el que participo"
    let summary = "Proyecto en el que participo"

    useEffect(() => {
        console.log(props.idPersonaProyecto)
    }, [props])


    let desvincular = async (e) => {

        try {
            let config = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rechazar)

            }
            console.log(config.body)

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona_proyecto/finalizar_persona_proyecto?id_persona_proyecto=' + props.idPersonaProyecto, config)
            let json = await res.json()
            console.log(res)
            console.log(json)


            window.location = '/participacion_proyectos';

        } catch (error) {

            console.log(error)

        }

    }

    let botones;
    if (props && props.fechaBajaPersonaAlProyecto != null) {
        botones =
            <div class="container-fechas">
                <div class="wrap-fechas-cambio">
                    <a href={urlDetalle} class="btn btn-primary btn-detalle">Ver proyecto</a>
                </div>
            </div>
            
    } else {
        botones =
            <div class="container-fechas">
                <div class="wrap-fechas">
                    <a href={urlDetalle} class="btn btn-primary btn-detalle">Ver proyecto</a>
                </div>
                <div class="wrap-fechas">
                    <button type='button' onClick={desvincular} class="btn btn-primary btn-danger">Desvincularse</button>
                </div>
            </div>
    }

    return (

        <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={urlImg} alt="Card image cap"></img>
            <div class="card-body">
                <label><b>Titulo:</b></label>
                <p class="card-text"><b>{props.tituloProyecto}</b></p>
                <label><b>Estado:</b></label>
                <p class="card-text">{props.descripcionEstado}</p>
                <label><b>Categoria:</b></label>
                <p class="card-text">{props.descripcionCategoria}</p>
                <label><b>Postulado a:</b></label>
                <p class="card-text">{props.rolPostulado}</p>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                        <label><b>Fecha inicio</b></label>
                    </div>
                    <div class="wrap-fechas">
                        <label><b>Fecha finalizacion</b></label>
                    </div>
                </div>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                        <p class="card-text">{props.fechaAltaPersonaAlProyecto}</p>
                    </div>
                    <div class="wrap-fechas">
                        <p class="card-text">{props.fechaBajaPersonaAlProyecto}</p>
                    </div>
                </div>
                {botones}
                <div class='linkedin'>
                    <div class='linkwrap'>
                        
                    </div>

                    <div class='linkwrap'>
                        <LinkedinShareButton url={url} title={title} className="share-button" summary={summary}>
                        <p>Comparte</p>
                            <LinkedinIcon size={40} round={true} width={240}>
                            </LinkedinIcon>
                        </LinkedinShareButton>
                    </div>
                </div>
                
            </div>
        </div>



    )
}



export default TarjetaParticipacion;


