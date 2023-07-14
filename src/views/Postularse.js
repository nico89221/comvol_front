import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import validator from 'validator';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Postularse() {

    let { id } = useParams();
    console.log(id);
    let url = 'https://apicomvolbackend-production.up.railway.app/proyecto/detalle?id_proyecto=' + id;

    const [detalle, setDetalle] = useState(null);
    const [rol, setRol] = useState(null);
    const [errors, setErrors] = useState("");

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

    const validate = values => {
        const errors = {}

        console.log("rol=" + values)

        if (values.idRol == "") {
            errors.idRol = "Este campo es obligatorio"
        }

        return errors
    }

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setDetalle(data)

            })

        console.log(detalle)

    }, [])

    useEffect(() => {

        console.log(rol)
    }, [rol])


    let handleChange = (e) => {

        setRol(
            {
                [e.target.name]: e.target.value,
            })

    }



    let postulacion = async (e) => {

        try {
            if (rol == null || rol.idRol == 0) {
                setErrors({ idRol: "Por favor eliga un rol" })
                toast.warn('Campos invalidos o vacios', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                return errors
            } else {
                setErrors(null)
            }

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(rol)

            }
            console.log(config.body)

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona_proyecto/postulacion?id_persona=' + localStorage.getItem('id') + '&id_proyecto=' + detalle.idProyecto, config)
            let json = await res.json()
            console.log(json.descripcion)
            if (json.descripcion == "El usuario ya se encuentra postulado a ese proyecto") {
                toast.error('Ya estas postulado', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {

                toast.success('la postulacion ha sido exitosamente', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                await delay(2000);

                window.location = '/';
            }



        } catch (error) {


        }
    }

    let contenido;
    if (detalle == null) {
        return contenido = <p>cargando</p>;
    }
    else {

        return (
            <div>
                <h3 class='titulo-postularse'>Finaliza tu postulacion</h3>
                <section class='section-suscripcion'>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                    <div class="card" style={{ width: "18rem" }}>
                        <img src={detalle.urlImagenProyecto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{detalle.tituloProyecto}</h5>
                            <p class="card-text">{detalle.descripcionProyecto}</p>
                            <p class="card-text">Cantidad Integrantes: {detalle.limitePersonasProyecto}</p>
                            <div class='rol-postulacion'>
                                <select id='idRol' name='idRol' class="form-control" onChange={handleChange}>
                                    <option selected value={0}>Elegi un rol</option>
                                    <option value={1}>Desarrollador Backend Java</option>
                                    <option value={2}>Desarrolador Frontend Angular</option>
                                </select>
                            </div>
                            <div class='error-span'>
                                <span class='error-rol'>{errors && errors.idRol}</span>
                            </div>
                            <div class='btn-sus'>
                                <button type='button' class="btn btn-success" onClick={postulacion}>Finalizar Postulacion</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )

    }

}

export default Postularse;