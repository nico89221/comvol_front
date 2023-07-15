import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function DetalleProyecto(props) {

    let { id } = useParams();
    console.log(id);
    let url = 'https://apicomvolbackend-production.up.railway.app/proyecto/detalle?id_proyecto=' + id;

    const [detalle, setDetalle] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setDetalle(data)

            })

        console.log(detalle)

    }, [])

    let postulacion = () => {

        if (localStorage.getItem("id")) {
            window.location = '/postularse/' + detalle.idProyecto
        } else {
            alert("no estas logueado")
        }
    }

    let btnPostularse;
    if (detalle && (detalle.descripcionEstado == "Cancelado" || detalle.descripcionEstado == "Finalizado" || detalle.descripcionEstado == "En desarollo")) {
        btnPostularse = <p></p>
    } else {
        btnPostularse = <button class="btn btn-primary" onClick={postulacion}>Postularse</button>
    }


    let contenido;
    if (detalle == null) {
        return contenido = <p>cargando</p>;
    }
    else {

        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <div class="project-info-box mt-0">
                            <h3>{detalle.tituloProyecto}</h3>
                            <p class="mb-0">{detalle.descripcionProyecto}</p>
                        </div>

                        <div class="project-info-box">
                            <p><b>Estado: </b>{detalle.descripcionEstado}</p>
                            <p><b>Categoria: </b>{detalle.descripcionCategoria}</p>
                            <p><b>Cantidad de integrantes: </b>{detalle.limitePersonasProyecto}</p>
                            <p><b>Product Owner: </b>{detalle.nombreReferente}</p>
                            <p><b>Forma de Pago: </b>{detalle.formaDePago}</p>
                        </div>
                        <div className='btn-postularse'>
                            {btnPostularse}
                        </div>
                    </div>

                    <div class="col-md-7">
                        <img src={detalle.urlImagenProyecto} alt="project-image" class="rounded"></img>

                    </div>
                </div>
            </div>



        )
    }

}


export default DetalleProyecto;


