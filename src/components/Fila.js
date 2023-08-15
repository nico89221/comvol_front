import React, { useEffect, useState } from 'react';
import { faMagnifyingGlass, faPencil, faEnvelopeOpenText, faUserGroup, faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

    LinkedinShareButton,
    LinkedinIcon,

} from "react-share";

function Fila(props) {

    let urlImg = props.urlImagenPersona;
    let urlDetalle = "mis_proyectos/vista_proyecto/" + props.idProyecto;
    let urlEditar = "mis_proyectos/editar_proyecto/" + props.idProyecto;
    let urlPostulaciones = "/mis_proyectos/postulaciones/" + props.idProyecto;
    let urlIntegrantes = "/mis_proyectos/integrantes/" + props.idProyecto;
    const [datos, estableceDatos] = useState('');
    let url = "https://main--stellar-bublanina-20e9ef.netlify.app/detalle_proyecto/" + props.idProyecto
    let title = "Proyecto en el que participo"
    let summary = "Proyecto en el que participo"



    const padreAHijo = () => {
        estableceDatos(props);
        console.log(datos);

    }
    let search;
    let pencil;
    let postulation;
    let peopleGroup;
    if (props && (props.descripcionEstado == "Cancelado" || props.descripcionEstado == "Finalizado")) {
        search = <td><a class="btn btn-light">
            <FontAwesomeIcon icon={faBan} style={{ color: "#e90118", fontSize: "26px", textAlign: "center" }} />
        </a></td>
        pencil = <td><a class="btn btn-light">
            <FontAwesomeIcon icon={faBan} style={{ color: "#e90118", fontSize: "26px", textAlign: "center" }} />
        </a></td>
        postulation = <td><a class="btn btn-light">
            <FontAwesomeIcon icon={faBan} style={{ color: "#e90118", fontSize: "26px", textAlign: "center" }} />
        </a></td>
        peopleGroup = <td><a class="btn btn-light">
            <FontAwesomeIcon icon={faBan} style={{ color: "#e90118", fontSize: "26px", textAlign: "center" }} />
        </a></td>
    } else {

        search = <td><a href={urlDetalle} class="btn btn-primary"><span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span></a></td>
        pencil =
            <td><a href={urlEditar} class="btn btn-success">
                <FontAwesomeIcon icon={faPencil} /></a></td>

        postulation =
            <td class='icono-proyecto'><a href={urlPostulaciones} class="btn btn-warning">
                <FontAwesomeIcon icon={faEnvelopeOpenText} /></a></td>

        peopleGroup =
            <td class='icono-proyecto'><a href={urlIntegrantes} class="btn btn-dark">
                <FontAwesomeIcon icon={faUserGroup} /></a></td>

    }


    return (
        <tr>
            <td>{props.idProyecto}</td>
            <td>{props.tituloProyecto}</td>
            <td>{props.descripcionCategoria}</td>
            <td>{props.descripcionEstado}</td>
            <td>{props.limitePersonasProyecto}</td>
            <td>
                <div className="">
                    <img src={props.urlImagenProyecto} alt="project-image" class="img-detalle"></img>
                </div>
            </td>
            {search}
            {pencil}
            {postulation}
            {peopleGroup}
            <td>
                <LinkedinShareButton url={url} title={title} className="share-button" summary={summary}>
                    <LinkedinIcon size={40} round={true} width={60}>
                    </LinkedinIcon>
                </LinkedinShareButton>
            </td>
        </tr>


    )
}





export default Fila;


