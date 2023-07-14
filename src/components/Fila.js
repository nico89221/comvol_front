import React, { useEffect, useState } from 'react';
import { faMagnifyingGlass, faPencil, faEnvelopeOpenText, faUserGroup, faBan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Fila(props) {

    let urlImg = props.urlImagenPersona;
    let urlDetalle = "mis_proyectos/vista_proyecto/" + props.idProyecto;
    let urlEditar = "mis_proyectos/editar_proyecto/" + props.idProyecto;
    let urlPostulaciones = "/mis_proyectos/postulaciones/" + props.idProyecto;
    let urlIntegrantes = "/mis_proyectos/integrantes/" + props.idProyecto;
    const [datos, estableceDatos] = useState('');



    const padreAHijo = () => {
        estableceDatos(props);
        console.log(datos);

    }
    let search;
    let pencil;
    let postulation;
    let peopleGroup;
    if (props && (props.descripcionEstado == "Cancelado" || props.descripcionEstado == "Finalizado")) {
        search = <td><a  class="btn btn-light">
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
        </tr>


    )
}





export default Fila;


