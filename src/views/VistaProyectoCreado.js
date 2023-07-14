import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import EditarProyecto from './EditarProyecto';

function VistaProyectoCreado() {

    let { id } = useParams();
    let url = 'https://apicomvolbackend-production.up.railway.app/proyecto/detalle?id_proyecto=' + id;
    let urlEditar = "../editar_proyecto/" + id;
    

    const [detalle, setDetalle] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setDetalle(data)

            })


    }, []);


    let contenido = detalle;
    if (contenido == null) {
        return <p>cargando</p>
    }
    else {

        return (
            <section className='section-form'>
                <form className='form-proyecto'>
                    <h2 className='titulo-proyecto'>Detalle tu proyecto</h2>
                    <div class="form-row">
                        <div class="form-group" >
                            <div class='img-div'>
                                <img src={detalle.urlImagenProyecto} alt="project-image" class="img-detalle-vista"></img>
                            </div>
                            <label for="inputEmail4" className='label_proyecto'>Titulo del proyecto</label>
                            <input name='tituloProyecto' type="text" class="form-control" id="tituloProyecto"
                            value={detalle.tituloProyecto} placeholder="Titulo del proyecto..."></input>
                        </div>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Descripcion</label>
                            <textarea id='descripcionProyecto' value={detalle.descripcionProyecto}
                                name='descripcionProyecto' class="form-control" rows="3" placeholder='Descripcion breve del proyecto'
                            ></textarea>
                        </div>
                    </div>
                    <div class='label_proyecto'>
                        <label for="inputAddress" className='label_proyecto'>Cantidad de Integrantes necesarios</label>
                        <input id="limitePersonasProyecto" value={detalle.limitePersonasProyecto} name='limitePersonasProyecto' type="number" class="form-control" placeholder="1,2,3..."></input>
                    </div>
                    <div class="form-row">
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Categoria</label>
                            <select id='idCategoriaProyecto' value={detalle.descripcionCategoria} name='idCategoriaProyecto' class="form-control">
                                <option selected>{detalle.descripcionCategoria}</option>
                            </select>
                        </div>
                        <div class="label_proyecto form-group">
                            <label for="inputState" className='label_proyecto'>Forma de Pago</label>
                            <select id='idFormaDePago' name='idFormaDePago' value={detalle.descripcionEstado} class="form-control"  >
                                <option selected >{detalle.descripcionEstado}</option>
                            </select>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="esEmpresa" name='esEmpresa' value={detalle.esEmpresa}></input>
                            <label class="form-check-label" for="defaultCheck1"> Es empresa</label>
                        </div>
                        <div class='contenedor-perfil'>
                            <div class='btn-editar-perfil'>
                                <a href="/mis_proyectos" class="btn btn-success btn-danger btn-ba"  >Volver a Mis Proyectos</a>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        )
    }
}

export default VistaProyectoCreado;