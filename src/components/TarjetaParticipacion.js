import React, { useEffect, useState } from 'react';
import {

    LinkedinShareButton,
    LinkedinIcon,

} from "react-share";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function TarjetaParticipacion(props) {
    console.log("Estas son las props")
    console.log(props)

    let urlImg = props.urlImagenProyecto;
    let urlDetalle = "detalle_proyecto/" + props.idProyecto;
    const [rechazar, setRechazar] = useState({ idEstadoPersona: 3 });
    let url = "http://localhost:8080/detalle_proyecto/" + props.idProyecto
    let title = "Proyecto en el que participo"
    let summary = "Proyecto en el que participo"
    const [listIntegrantes, setlistIntegrantes] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        fetch("http://localhost:8080/persona_proyecto/detalle_proyecto_persona?id_proyecto=" + props.idProyecto + "&pagina=0&cantidad=20")
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setlistIntegrantes([
                    ...data.content,
                ])

            })
    }, []);


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

            let res = await fetch('http://localhost:8080/persona_proyecto/finalizar_persona_proyecto?id_persona_proyecto=' + props.idPersonaProyecto, config)
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

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Lista de Integrantes
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table class="table table-striped">
                        <thead class="table-dark">
                            <tr>
                                <td>Nombre y Apellido</td>
                                <td>Numero de Contacto</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="">
                                        {
                                            listIntegrantes.map(integrante => {
                                                return (
                                                    <div>
                                                        <p class="card-text" style={{ marginLeft: 20, display: 'flex', flexWrap: 'wrap' }}>{integrante.nombre} {integrante.apellido}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </td>
                                <td>
                                    <div className="">
                                        {
                                            listIntegrantes.map(integrante => {
                                                return (
                                                    <div>
                                                        <a aria-label="Chat on WhatsApp" href={"https://wa.me/" + integrante.numeroCelular} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} style={{ color: "#37c011", paddingLeft: "10px" }} size="2x" /></a>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    let whatsapp = "https://wa.me/" + props.numeroCelularPropietario + "?text=Hola%20" + props.nombre + "%20te%20contacto%20desde%20la%20web%20de%20comvol%20por%20una%20postulacion%20tuya"
    return (

        <div class="card" style={{ width: "25rem", marginBottom:"12px" }}>
            <img class="card-img-top" src={urlImg} alt="Card image cap" style={{height:"400px"}}></img>
            <div class="card-body" style={{ paddingLeft:"55px",paddingRight:"2px",paddingBottom:"0px" }}>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                        <label><b>Titulo:</b></label>
                    </div>
                    <div class="wrap-fechas">
                        <label><b>Estado:</b></label>
                    </div>
                </div>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                        <p class="card-text"><b>{props.tituloProyecto}</b></p>
                    </div>
                    <div class="wrap-fechas">
                        <p class="card-text">{props.descripcionEstado}</p>
                    </div>
                </div>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                        <label><b>Categoria:</b></label>
                    </div>
                    <div class="wrap-fechas">
                        <label><b>Postulado a:</b></label>
                    </div>
                </div>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                        <p class="card-text">{props.descripcionCategoria}</p>
                    </div>
                    <div class="wrap-fechas">
                        <p class="card-text">{props.rolPostulado}</p>
                    </div>
                </div>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                    <label><b>Propietario del proyecto:</b></label>
                    </div>
                    <div class="wrap-fechas">
                    <label><b>Integrantes</b></label>
                    </div>
                </div>
                <div class="container-fechas">
                    <div class="wrap-fechas">
                    <p class="card-text"  >{props.propietario}</p>
                    <a aria-label="Chat on WhatsApp" href={whatsapp} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} style={{ color: "#37c011", paddingLeft: "10px" }} size="2x" /></a>
                    </div>
                    <div class="wrap-fechas">
                        <Button variant="primary" onClick={() => setModalShow(true)}>
                        Ver
                    </Button>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    </div>
                </div>
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
                        <LinkedinShareButton url={url} title={title} className="share-button" summary={summary}>
                            <LinkedinIcon size={50} round={true} width={265}>
                            </LinkedinIcon>
                        </LinkedinShareButton>
                    </div>
                </div>

            </div>
        </div>



    )
}



export default TarjetaParticipacion;


