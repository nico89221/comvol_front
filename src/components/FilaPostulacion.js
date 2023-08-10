import React, { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FilaPostulacion(props) {

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
        console.log(datos);
    }

    console.log(rechazar)

    let contratar = async (e) => {

        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosFinal)

            }
            console.log(config.body)

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona_proyecto/crear_persona_proyecto', config)
            let json = await res.json()
            console.log(res)
            console.log(json)
            toast.success('La persona ha sido aceptado con exito', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

            
            await delay(10000);

            window.location = '/mis_proyectos/vista_proyecto/' + props.idProyecto;

        } catch (error) {

            console.log(error)

        }
    }

    let noAceptar = async (e) => { 

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

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona_proyecto/rechazar_persona_proyecto?id_persona_postulacion='+props.idPostulacionPersona, config)
            let json = await res.json()
            console.log(res)
            console.log(json)
            toast.success('La persona ha sido aceptado con exito', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });


            window.location = '/mis_proyectos/vista_proyecto/' + props.idProyecto;

        } catch (error) {

            console.log(error)

        }

    }



    let botonAceptar;
    let botonRechazar;
    if (props && (props.estadoPostulacion == "ACEPTADO" || props.estadoPostulacion == "RECHAZADO")) {
        botonAceptar = <td></td>
        botonRechazar = <td></td>
    } else {
        botonAceptar = <td><a href="" class="btn btn-success" onClick={contratar}>Contratar</a></td>
        botonRechazar = <td><a href="" class="btn btn-danger" onClick={noAceptar}>Rechazar</a></td>

    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );



    return (
        <tr>
            <td>{props.tituloProyecto}</td>
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.email}</td>
            <td>{props.pais}</td>
            <td><a href={props.perfilExterno} target='_blank'>{props.perfilExterno}</a></td>
            <td>{props.rolPostulado}</td>
            <td>{props.estadoPostulacion}</td>
            {botonAceptar}
            {botonRechazar}
            <ToastContainer />
        </tr>


    )
}





export default FilaPostulacion;


