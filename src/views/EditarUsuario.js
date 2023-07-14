import React, { useState, useEffect, event } from 'react';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validate = event => {
    const errors = {}

    console.log(event.target.nombre.value)
        if (event.target.nombre.value == "") {
            errors.nombre = "Este campo es obligatorio"
        }

        if (event.target.apellido.value == "") {
            errors.apellido = "Este campo es obligatorio"
        }

        if (event.target.provincia.value == "") {
            errors.provincia = "Este campo es obligatorio"
        }

        if (event.target.acercaDe.value == "") {
            errors.acercaDe = "Este campo es obligatorio"
        }

        if (event.target.localidad.value == "") {
            errors.localidad = "Este campo es obligatorio"
        }

        if (event.target.perfilExterno.value == "") {
            errors.perfilExterno = "Este campo es obligatorio"
        }

    return errors
}


function EditarUsuario() {

    let url = 'https://apicomvolbackend-production.up.railway.app/persona/detalle?id_persona=' + localStorage.getItem('id');
    const [perfil, setPerfil] = useState("");
    const [perfilFinal, setPerfilFinal] = useState();
    let listRol;
    let urlPerfil = '/perfil'
    const [errors, setErrors] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setPerfil(data)

            })

    }, [])

    if (perfil && perfil.roles) {
        listRol = perfil.roles.map(rol => rol.idRol)
        console.log(typeof (perfil.nombre))
    }

    let rolFinal

    let validar = () => {
        
        if(perfil && perfil.personaRoles && typeof(perfil.personaRoles) === 'object'){
        console.log("entra en validar")
        perfil.personaRoles.map(rol => {
            if (typeof (rol) == 'string') {
                console.log("entra en type of")
                console.log(listRol)
                rolFinal = listRol
            }
        })
        return listRol
    }
    return [perfil.personaRoles]
    }


    useEffect(() => {
        console.log("entra en use effect perfil")

        setPerfilFinal(
            {
                nombre: perfil.nombre,
                apellido: perfil.apellido,
                email: perfil.email,
                acercaDe: perfil.acercaDe,
                pais: perfil.pais,
                provincia: perfil.provincia,
                localidad: perfil.localidad,
                perfilExterno: perfil.perfilExterno,
                personaRoles: validar()
            })
    }, [perfil])



    useEffect(() => {

        console.log(perfilFinal)
    }, [perfilFinal])

    let handleChange = (e) => {

        console.log("handle")
        console.log(e.target.value)

        setPerfil(
            {
                ...perfil,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
            })

    }


    let handleSubmit = async (event) => {

        event.preventDefault();
        const result = validate(event)
        if (Object.keys(result).length) {
            toast.warn('Campos invalidos o vacios', {
                position: "top-right",
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
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(perfilFinal)


            }

            console.log(config.body)
            console.log(localStorage.getItem('id'))

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona/editar?id_persona=' + localStorage.getItem('id'), config)
            let json = await res.json()

            window.location = '/perfil'

        } catch (error) {

            this.setState({
                loading: false,
                error
            })

        }

    }
    let contenido;
    if (perfil == null || perfil.personaRoles == null) {
        return (contenido = <p>cargando</p>);
    } else {
        
        return (
            <section className='section-form'>
                <form onSubmit={handleSubmit} className='form-proyecto'>
                    <h2 className='titulo-proyecto'>Editar Perfil</h2>
                    <div class="form-row">
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Nombre</label>
                            <input name='nombre' type="text" class="form-control" id="nombre"
                                value={perfil.nombre} onChange={handleChange}></input>
                        </div>
                        <span className='error'>{errors && errors.nombre}</span>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Apellido</label>
                            <input name='apellido' type="text" class="form-control" id="apellido"
                                value={perfil.apellido} onChange={handleChange}></input>
                        </div>
                        <span className='error'>{errors && errors.apellido}</span>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Acerca de</label>
                            <textarea id='acercaDe' value={perfil.acercaDe}
                                onChange={handleChange} name='acercaDe' class="form-control" rows="3"
                            ></textarea>
                        </div>
                        <span className='error'>{errors && errors.acercaDe}</span>
                    </div>
                    <div class="form-row">
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Pais</label>
                            <select id='pais' value={perfil.pais} onChange={handleChange} name='pais' class="form-control"  >
                                <option value={1}>Argentina</option>
                            </select>
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Provincia</label>
                            <input name='provincia' type="text" class="form-control" id="provincia"
                                value={perfil.provincia} onChange={handleChange}></input>
                        </div>
                        <span className='error'>{errors && errors.provincia}</span>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Localidad</label>
                            <input name='localidad' type="text" class="form-control" id="localidad"
                                value={perfil.localidad} onChange={handleChange}></input>
                        </div>
                        <span className='error'>{errors && errors.localidad}</span>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Perfil Externo</label>
                            <input name='perfilExterno' type="text" class="form-control" id="perfilExterno"
                                value={perfil.perfilExterno} onChange={handleChange}></input>
                        </div>
                        <span className='error'>{errors && errors.perfilExterno}</span>
                        <div class="form-row">
                            <div class='label_proyecto'>
                                <label for="inputState" className='label_proyecto'>Elegir nuevo rol</label>
                                <select id='personaRoles' onChange={handleChange} name='personaRoles' class="form-control"  >
                                    <option value={1}>Desarrollador Backend Java</option>
                                    <option value={2}>Desarrolador Frontend Angular</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                    </div>
                    <div class='contenedor-editar'>
                        <div class='btn-editar-perfil'>
                            <button type="submit" class="btn btn-primary btn-ed">Enviar</button>
                        </div>
                        <div class='btn-editar-perfil'>
                            <a href={urlPerfil} class="btn btn-success btn-ba ">Volver a mi Perfil</a>
                        </div>
                        <ToastContainer />
                    </div>
                </form>
            </section>

        )

    }
}



export default EditarUsuario;


