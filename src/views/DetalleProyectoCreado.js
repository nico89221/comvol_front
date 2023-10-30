import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { img } from 'bootstrap'
import Fila from '../components/Fila';

let count = 0;
function DetalleProyectoCreado(props) {

    let url = 'http://localhost:8080/proyecto/lista_detalle?id_persona=' + localStorage.getItem('id');
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

            count=count+1;
        console.log(listDetalle)
        console.log(count)


    }


    let contenido;
    if (listDetalle == null) {
        return contenido = <p>cargando</p>;
    }
    else {

        if (listDetalle.length != 0) {
            return (
                <section>
                    <h2 class='titulo-mis-proyectos'>Mis Proyectos</h2>
                    <div class='btn-crear'>
                        <a class="btn btn-danger" href={urlCrearProyecto}>Crear Proyecto</a>
                    </div>
                    <div class="bd-example">
                        <table class="table table-striped">
                            <thead class="table-dark">
                                <tr>
                                    <td>Titulo</td>
                                    <td>Categoria</td>
                                    <td>Estado</td>
                                    <td>Cantidad Integrantes</td>
                                    <td>Imagen</td>
                                    <td>Detalle</td>
                                    <td>Editar</td>
                                    <td>Postulaciones</td>
                                    <td>Integrantes</td>
                                    <td>Compartir</td>
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
                    </div>
                </section>


            )
        } else {
            return (
                <section className="principal">

                    <h2 className='titulo'><b>Aun no tienes proyectos que estas esperando para crear uno</b></h2>
                    <a class="btn btn-danger" style={{ fontSize: 24, margin: 24 }} href={urlCrearProyecto}>Crea un proyecto</a>

                </section>)


        }


    }
}

export default DetalleProyectoCreado;