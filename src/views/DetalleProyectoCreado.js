import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { img } from 'bootstrap'
import Fila from '../components/Fila';

function DetalleProyectoCreado(props) {

    let url = 'https://apicomvolbackend-production.up.railway.app/proyecto/lista_detalle?id_persona=' + localStorage.getItem('id');
    let urlCrearProyecto = '../crear_proyecto'

    const [listDetalle, setListDetalle] = useState([]);

    if (listDetalle.length == 0) {

        fetch(url)
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setListDetalle([
                    ...data.content,
                ])

            })

        console.log(listDetalle)


    }


    let contenido;
    if (listDetalle == null) {
        return contenido = <p>cargando</p>;
    }
    else {

        return (
            <section>
                <h2 class='titulo-mis-proyectos'>Mis Proyectos</h2>
                <div class='btn-crear'>
                    <a class="btn btn-danger" href={urlCrearProyecto}>Crear Proyecto</a>
                </div>
                <table class="table table-striped">
                    <thead class="table-dark">
                        <tr>
                            <td>Id</td>
                            <td>Titulo</td>
                            <td>Categoria</td>
                            <td>Estado</td>
                            <td>Cantidad Integrantes</td>
                            <td>Imagen</td>
                            <td>Detalle</td>
                            <td>Editar</td>
                            <td>Postulaciones</td>
                            <td>Integrantes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listDetalle.map((row, i) => {
                                return <Fila {...row} key={i} />
                            })
                        }
                    </tbody>
                </table>
            </section>


        )
    }
}

export default DetalleProyectoCreado;