import React, { useState, useEffect } from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FilaPerfiles(props) {


    const [datos, estableceDatos] = useState('');
    const [detalle, setDetalle] = useState("");
    const [errors, setErrors] = useState();

    let url = 'http://localhost:8080/proyecto/lista_detalle?id_persona=' + localStorage.getItem('id');
    let urlCrearProyecto = '../crear_proyecto'
    let valor = 0

    const [listDetalle, setListDetalle] = useState([]);

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(function (data) {

            console.log("La data es: " + data.content)
            setListDetalle([
                ...data.content,
            ])

        })
    },[])


    const validate = event => {
        const errors = {}
    
        console.log(valor)
    
        if (valor == 0) {
            errors.proyectos = "Por favor seleccione un proyecto"
        }
    
        return errors
    }


    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    let handleChange = (e) => {

        valor = e.target.value;
        console.log(valor)

    }

    useEffect(() => {
        console.log(valor)
    }, [valor])

    let clickPerfil = () => {

        window.location = props.perfilExterno;

    }

    let compartir = async (e) => {

        console.log(valor)

        const result = validate(e)
      
        console.log(result)
        if (Object.keys(result).length) {
            toast.warn('Por favor seleccione un proyecto antes de compartir', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

            return setErrors( result )
        }
    

        try {

            let config = {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }


            let res = await fetch('http://localhost:8080/persona/compartir_proyecto?id_persona='+props.idPersona+'&url_proyecto=http://localhost:3000/detalle_proyecto/'+2+'&id_referente=' + localStorage.getItem('id'), config)

            if (res.status == 200) {
                toast.success('Se ha compartido el proyecto con exito al postulante', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                
            }else{
                toast.error('Hubo un problema al querer compartir el proyecto al postulante', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
            

        } catch (error) {

            window.location = '/'
        }

    }


    return (
        
        <tr>
            <td>{props.email}</td>
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.pais}</td>
            <td>{props.provincia}</td>
            <td>{props.localidad}</td>
            <td><button type="button" class="btn btn-dark" href={props.perfilExterno} style={{fontSize:"12px"}} onClick={clickPerfil}>VER PERFIL EXTERNO </button></td>
            <td>{props.acercaDe}</td>
            <td></td>
            <td>
                {
                    props.rol.map(r => {
                        return r
                    })
                }
            </td>
            <td><div class='selec-proy'>
                <select id='proyectos' name='proyectos' onChange={handleChange} class="form-control" >
                    <option value={0} >Seleccionar proyecto</option>
                    {
                        listDetalle.map(proyecto => {
                            return (

                                <option value={proyecto.idProyecto} >{proyecto.tituloProyecto}</option>

                            )
                        })
                    }
                </select>
            </div></td>
            <td><ToastContainer /></td>
            <td><button type="button" class="btn btn-primary" onClick={compartir}>Enviar Mensaje</button></td>
        </tr>
        


    )
}





export default FilaPerfiles;


