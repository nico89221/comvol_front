import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PerfilUsuario() {

    console.log(localStorage.getItem('id'))

    if (localStorage.getItem('id')) {
        console.log("existe")
    } else {
        window.location = '/sigin'
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    let url = 'https://apicomvolbackend-production.up.railway.app/persona/detalle?id_persona=' + localStorage.getItem('id');
    let urlEditarUsuario = "./perfil/editar";


    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                if (data.descripcion == "El usuario ya se encuentra dado de baja") {
                    window.location = '/sigin'
                } else {
                    setPerfil(data)
                }
            })


    }, []);


    let bajaUsuario = async (e) => {

        try {

            let config = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona/baja?id_persona=' + localStorage.getItem('id'), config)
            console.log(res)
            if (res.status == 200) {
                localStorage.removeItem('id');
                localStorage.removeItem('tipoUsuario'); 
                
            }
            window.location = '/'

        } catch (error) {

            window.location = '/'

        }

    }

    let bajaSuscripcion = async (e) => {

        try {

            let config = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },

            }

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona/baja_suscripcion?id_persona=' + localStorage.getItem('id'), config)
            console.log(res)
            if (res.status == 200) {
                toast.success('Su suscripcion ha sido cancelada', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                
            }

            await delay(1600);

            window.location = '/perfil'

        } catch (error) {


        }

    }

    let contenido = perfil;
    if (contenido == null) {
        return <p>cargando</p>
    }
    else {
        let btnSus;

        if (perfil && perfil.suscripcion == true) {
            console.log("verdadero")
            btnSus = 
            <div class='contenedor-suscripcion'>
                <button type='button' class="btn btn-danger" onClick={bajaSuscripcion}>Cancelar suscripcion</button>
            </div>
        } 

        if(perfil && perfil.suscripcion == false) {
            console.log("falso")
            btnSus = <p></p>
        }


        return (
            <section className='section-form'>
                <form className='form-proyecto'>
                    <h2 className='titulo-proyecto'>Tu Perfil</h2>
                    <div class="form-row">
                        <div class="form-group" >
                            <div class='img-div'>
                                <img src='https://main--stellar-bublanina-20e9ef.netlify.app/img/user.jpg' alt="project-image" class="img-detalle-vista"></img>
                            </div>
                            <label for="inputEmail4" className='label_proyecto'>Nombre</label>
                            <input name='nombre' type="text" class="form-control" id="nombre"
                                value={perfil.nombre} ></input>
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Apellido</label>
                            <input name='apellido' type="text" class="form-control" id="apellido"
                                value={perfil.apellido} ></input>
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Email</label>
                            <input name='email' type="text" class="form-control" id="email"
                                value={perfil.email} ></input>
                        </div>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Acerca de</label>
                            <textarea id='acercaDe' value={perfil.acercaDe}
                                name='acercaDe' class="form-control" rows="3"
                            ></textarea>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Pais</label>
                            <select id='pais' value={perfil.idPais} name='pais' class="form-control">
                                <option selected>{perfil.pais}</option>
                            </select>
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Provincia</label>
                            <input name='tituloProyecto' type="text" class="form-control" id="tituloProyecto"
                                value={perfil.provincia}></input>
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Localidad</label>
                            <input name='localidad' type="text" class="form-control" id="localidad"
                                value={perfil.localidad}></input>
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Perfil Externo</label>
                            <input name='perfilExterno' type="text" class="form-control" id="perfilExterno"
                                value={perfil.perfilExterno} ></input>
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Roles</label>
                            {
                                perfil.personaRoles.map(rol => {
                                    return (
                                        <input name='rol' type="text" class="form-control input-rol" id="rol"
                                            value={rol} ></input>
                                    )
                                })
                            }
                        </div>
                        {btnSus}
                        <div class='contenedor-perfil'>
                            <div class='btn-editar-perfil'>
                                <a href={urlEditarUsuario} class="btn btn-success btn-ed">Editar</a>
                            </div>
                            <div class='btn-editar-perfil'>
                                <button class="btn btn-success btn-danger btn-ba" onClick={bajaUsuario} id='baja'>Baja</button>
                            </div>
                            <ToastContainer />
                        </div>
                    </div>
                </form>
            </section >
        )
    }
}

export default PerfilUsuario;