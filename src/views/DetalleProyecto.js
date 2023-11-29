import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function DetalleProyecto(props) {

    let { id } = useParams();
    console.log(id);
    let url = 'https://api-production-db96.up.railway.app/proyecto/detalle?id_proyecto=' + id;

    const [detalle, setDetalle] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setDetalle(data)

            })

        console.log(detalle)

    }, [])

    console.log(detalle)

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
        btnPostularse =
            <div class="button-container-2">
                <span class="mas">Participa</span>
                <button type="button" name="Hover" onClick={postulacion} >Postularse</button>
            </div>
    }


    let contenido;
    if (detalle == null) {
        return contenido = <p>Cargando</p>;
    }
    else {

        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-5" style={{ background: 'none' }}>
                        <div class="project-info-box mt-0" style={{ background: 'none' }}>
                            <h3 style={{ fontSize: "30px" }}>{detalle.tituloProyecto}</h3>
                            <p class="mb-0" style={{ fontSize: "14px" }}>{detalle.descripcionProyecto}</p>
                        </div>

                        <div class="project-info-box" style={{ background: 'none' }}>
                            <p style={{ fontSize: "16px" }}><b>Puesto Solicitado: </b>
                                {
                                    detalle.proyectoRoles.map(proy => {
                                        return (
                                            <div>
                                                {proy.descripcionRol}
                                            </div>
                                        )
                                    })
                                }
                            </p>
                            <p style={{ fontSize: "16px" }}><b>Estado: </b>{detalle.descripcionEstado}</p>
                            <p style={{ fontSize: "16px" }}><b>Categoría: </b>{detalle.descripcionCategoria}</p>
                            <p style={{ fontSize: "16px" }}><b>Cantidad de integrantes: </b>{detalle.limitePersonasProyecto}</p>
                            <p style={{ fontSize: "16px" }}><b>Product Owner: </b>{detalle.nombreReferente}</p>
                            <p style={{ fontSize: "16px" }}><b>Forma de Pago: </b>{detalle.formaDePago}</p>
                        </div>
                        <div className='btn-postularse'>
                            {btnPostularse}
                        </div>
                    </div>


                    <div class="col-md-7">
                        <img src={detalle.urlImagenProyecto} alt="project-image" class="rounded" style={{ width: "400px" }}></img>
                    </div>
                </div>
            </div>



        )
    }

}


export default DetalleProyecto;


