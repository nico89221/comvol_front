import React, { useState, useEffect } from 'react';
import FilaPostulacion from '../components/FilaPostulacion';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VerPostulaciones(props) {

    let{id}= useParams();
    let url = 'https://apicomvolbackend-production.up.railway.app/persona_proyecto/detalle_postulacion?id_proyecto='+id+'&pagina=0&cantidad=20' ;

    const [listPostulacion, setlistPostulacion] = useState([]);

    if (listPostulacion.length == 0) {

        fetch(url)
            .then(response => response.json())
            .then(function (data) {
                setlistPostulacion([
                    ...data.content,
                ])

            })

        console.log(listPostulacion)


    }

    let contenido;
    if (listPostulacion == null) {
        return contenido = <p>cargando</p>;
    }
    else {

        return (
            <section>
                <h2 class='titulo-mis-proyectos'>Postulaciones</h2>
                <div class='btn-crear'>
                    <a class="btn btn-primary" href="/mis_proyectos">Volver a proyectos</a>
                </div>
                <table class="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <td>Nombre Proyecto</td>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Email</td>
                            <td>Pais</td>
                            <td>Perfil Externo</td>
                            <td>Rol postulado</td>
                            <td>Estado</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listPostulacion.map((row, i) => {
                                return <FilaPostulacion {...row} key={i} />
                            })
                        }
                        <ToastContainer />
                    </tbody>
                </table>
            </section>


        )
    }
}

export default VerPostulaciones;