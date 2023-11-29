import React, { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    EmailIcon,
    EmailShareButton,
  } from "react-share";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FilaIntegrantes(props) {

    let urlImg = props.urlImagenPersona;
    let urlDetalle = "mis_proyectos/vista_proyecto/" + props.idProyecto;
    let urlEditar = "mis_proyectos/editar_proyecto/" + props.idProyecto;
    let urlPostulaciones = "/mis_proyectos/postulaciones/" + props.idProyecto;
    const [datos, estableceDatos] = useState('');
    const [datosFinal, setDatosFinal] = useState("");
    const [rechazar,setRechazar] = useState({idEstadoPersona: 3});

    useEffect(()=>{
        setDatosFinal({
            idPostulacionPersona: props.idPostulacionPersona,
            idEstadoPersona: 2,
            idPersona: props.idPersona,
            idProyecto: props.idProyecto,
            idRol: props.idRol
        })
    },[props])


    const padreAHijo = () => {
        estableceDatos(props);
        console.log(props);
    }

   
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

            let res = await fetch('https://api-production-db96.up.railway.app/persona_proyecto/finalizar_persona_proyecto?id_persona_proyecto='+props.idPersonaProyecto, config)
            let json = await res.json()
            console.log(res)
            console.log(json)
            toast.success('La persona ha sido desvinculada con exito', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

            //await delay(100);

            window.location = '/mis_proyectos/integrantes/' + props.idProyecto;

        } catch (error) {

            console.log(error)

        }

    }




    let botonRechazar;
    if (props && props.fechaBajaPersonaAlProyecto !=null) {
        botonRechazar = <td></td>
    } else {
        botonRechazar = <td class='icono-proyecto'><a href="" class="btn btn-danger" onClick={desvincular}>Desvincular</a></td>

    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    let whatsapp = "https://wa.me/"+props.numeroCelular+"?text=Hola%20"+props.nombre+"%20te%20contacto%20desde%20la%20web%20de%20comvol%20por%20una%20postulacion%20tuya"


    return (
        <tr>
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.email}</td>
            <td>{props.rolPostulado}</td>
            <td>{props.fechaAltaPersonaAlProyecto}</td>
            <td>{props.fechaBajaPersonaAlProyecto}</td> 
            <td><EmailShareButton quote={props.email} subject={props.email} url={props.email} body={props.email} email={props.email}><EmailIcon size={40} round={true}></EmailIcon></EmailShareButton></td> 
            <td><a aria-label="Chat on WhatsApp" href={whatsapp}target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} style={{color: "#37c011"}} size="2x"  /></a></td>
            {botonRechazar}
        </tr>


    )
}





export default FilaIntegrantes;


