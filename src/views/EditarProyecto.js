import React, { useState, useEffect, event } from 'react';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";


const validate = event => {
    const errors = {}

    if (event.target.tituloProyecto.value == "") {
        errors.tituloProyecto = "Este campo es obligatorio"
    }
    if (event.target.descripcionProyecto.value == "") {
        errors.descripcionProyecto = "Este campo es obligatorio"
    }
    if (event.target.limitePersonasProyecto.value <= 0) {
        errors.limitePersonasProyecto = "La cantidad de intregantes tiene que ser mayor a 0"
    }
    if (event.target.puestoSolicitado.value == "") {
        errors.puestoSolicitado = "Este campo es obligatorio"
    }

    return errors
}


function EditarProyecto() {

    let { id } = useParams();
    let url = 'https://api-production-db96.up.railway.app/proyecto/detalle?id_proyecto=' + id;
    const [detalle, setDetalle] = useState("");
    const [detalleFinal, setDetalleFinal] = useState("");
    const [errors, setErrors] = useState();
    const [selectedOption, setSelectedOption] = useState();
    let urlProyectos = "/mis_proyectos";
    let listRol;
    let personaRolesFinal = []
    const options = [
        { value: '1', label: 'Programador' },
        { value: '2', label: 'QA' },
        { value: '3', label: 'Analista' },
        { value: '4', label: 'Quiero ser inversor' },
        { value: '5', label: 'Busco trabajo' },
        { value: '6', label: 'Quiero aprender' },
        { value: '7', label: 'Empleador' }
    ];

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setDetalle(data)

            })

    }, [])

    useEffect(() => {
        setDetalleFinal(
            {
                tituloProyecto: detalle.tituloProyecto,
                descripcionProyecto: detalle.descripcionProyecto,
                puestoSolicitado: detalle.puestoSolicitado,
                idCategoriaProyecto: detalle.idCategoria,
                idEstadoProyecto: detalle.idEstado,
                limitePersonasProyecto: detalle.limitePersonasProyecto,
                urlImagenProyecto: detalle.urlImagenProyecto,
                idFormaDePago: detalle.idFormaDePago,
                esEmpresa: detalle.esEmpresa,
                razonSocial: detalle.razonSocial,
                proyectoRoles:selectedOption == null ?validar():selectedOption.map(sel => {
                    return sel.value
                })
            })
    }, [detalle])


    
        let validar = () => {
            let rolFinal = []
    
            if (detalle && detalle.proyectoRoles && typeof (detalle.proyectoRoles) === 'object') {
                console.log("entra en validar")
                detalle.proyectoRoles.map(rol => {
                        console.log("entra en type of")
                        rolFinal.push(rol.idRol)
                    
                })
                return rolFinal
            }
            return [detalle.proyectoRoles]
        }
        

    let handleChange = (e) => {

        setDetalle(
            {
                ...detalle,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
            })

    }

    let handleChangeSelect = (selectedOption) => {
       
        setSelectedOption(selectedOption);
        selectedOption.map(sel => {
            personaRolesFinal.push(sel.value)
        })
        console.log(personaRolesFinal)
        setDetalleFinal(
            {
                ...detalleFinal,
                proyectoRoles: personaRolesFinal
            })
    };


    let handleSubmit = async event => {

        event.preventDefault();

        const result = validate(event)

        console.log(result)
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

            return setErrors(result)
        }


        try {

            let config = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(detalleFinal)


            }

            console.log(config.body)

            let res = await fetch('https://api-production-db96.up.railway.app/proyecto/editar?id_proyecto=' + id, config)
            let json = await res.json()

            window.location = '/mis_proyectos';

        } catch (error) {

            this.setState({
                loading: false,
                error
            })

        }

    }
    let contenido;
    if (detalle == null) {
        return (contenido = <p>cargando</p>);
    } else {

        return (
            <section className='section-form'>
                <form onSubmit={handleSubmit} className='form-proyecto'>
                    <h2 className='titulo-proyecto'>Editar proyecto</h2>
                    <div class="form-row">
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Título del proyecto</label>
                            <input name='tituloProyecto' type="text" class="form-control" id="tituloProyecto"
                                value={detalle.tituloProyecto} onChange={handleChange} placeholder="Titulo del proyecto..."
                            ></input>
                        </div>
                        <span className='error'>{errors && errors.tituloProyecto}</span>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Descripción</label>
                            <textarea id='descripcionProyecto' value={detalle.descripcionProyecto} onChange={handleChange}
                                name='descripcionProyecto' class="form-control" rows="3" placeholder='Descripcion breve del proyecto'
                            ></textarea>
                        </div>
                        <span className='error'>{errors && errors.descripcionProyecto}</span>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Puesto Solicitado</label>
                            <textarea id='puestoSolicitado' value={detalle.puestoSolicitado} onChange={handleChange}
                                name='puestoSolicitado' class="form-control" rows="3" placeholder='Descripcion breve del/los puestos solicitado/s'
                            ></textarea>
                        </div>
                        <div>
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Puesto solicitado</label>
                            <Select
                                isMulti
                                value={selectedOption}
                                onChange={handleChangeSelect}
                                options={options}
                                name='selectedOption'
                            />
                        </div>
                        <span className='error'>{errors && errors.descripcionProyecto}</span>
                    </div>
                    <div class='label_proyecto'>
                        <label for="inputAddress" className='label_proyecto'>Cantidad de integrantes necesarios</label>
                        <input id="limitePersonasProyecto" value={detalle.limitePersonasProyecto} onChange={handleChange}
                            name='limitePersonasProyecto' type="number" class="form-control" placeholder="1,2,3..."></input>
                    </div>
                    <span className='error'>{errors && errors.limitePersonasProyecto}</span>
                    <div class="form-row">
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Categoría</label>
                            <select id='idCategoria' value={detalle.idCategoria} onChange={handleChange} name='idCategoria' class="form-control"  >
                                <option value={1}>VIDEOJUEGOS</option>
                                <option value={2}>APLICACIONES MOVILES</option>
                                <option value={3}>APLICACIONES WEB</option>
                                <option value={4}>EMPLEOS</option>
                                <option value={5}>INVERSIONES</option>
                                <option value={6}>COMMUNITY MANAGER</option>
                            </select>
                        </div>
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Estado</label>
                            <select id='idEstado' value={detalle.idEstado} onChange={handleChange} name='idEstado' class="form-control"  >
                                <option value={1}>Abierto a postulación</option>
                                <option value={2}>En desarollo</option>
                                <option value={3}>Cancelado</option>
                                <option value={4}>Finalizado</option>
                            </select>
                        </div>
                        <div class="label_proyecto form-group">
                            <label for="inputState" className='label_proyecto'>Forma de Pago</label>
                            <select id='idFormaDePago' name='idFormaDePago' value={detalle.idFormaDePago} onChange={handleChange} class="form-control"  >
                                <option selected value={0} >Ingresa una forma de pago</option>
                                <option type="number" value={1}>CONTRATACIÓN</option>
                                <option type="number" value={2}>SIN DEFINIR</option>
                            </select>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="esEmpresa" name='esEmpresa' value={detalle.esEmpresa} onChange={handleChange} ></input>
                            <label class="form-check-label" for="defaultCheck1"> Es empresa</label>
                        </div>
                    </div>
                    <div class="form-group">
                    </div>
                    <div class='contenedor-perfil'>
                        <div class='btn-editar-perfil'>
                            <button type="submit" class="btn btn-primary btn-ed">Enviar</button>
                        </div>
                        <div class='btn-editar-perfil'>
                            <a href={urlProyectos} class="btn btn-success btn-danger btn-ba"  >Volver a mis proyectos</a>
                        </div>
                    </div>
                    <ToastContainer />
                </form>
            </section>

        )

    }
}



export default EditarProyecto;


