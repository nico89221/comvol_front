import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import axios from 'axios';

const validate = values => {
    const errors = {}

    console.log("cantidad=" + values.cantidadIntegrantes)

    if (values.tituloProyecto == "") {
        errors.tituloProyecto = "Este campo es obligatorio"
    }
    if (values.descripcionProyecto == "") {
        errors.descripcionProyecto = "Este campo es obligatorio"
    }
    if (values.puestoSolicitado == "") {
        errors.descripcionProyecto = "Este campo es obligatorio"
    }
    if (values.limitePersonasProyecto <= 0) {
        errors.limitePersonasProyecto = "La cantidad de intregantes tiene que ser mayor a 0"
    }
    if (values.idCategoriaProyecto == 0) {
        errors.idCategoriaProyecto = "Tiene que asignar una categoria"
    }
    if (values.idFormaDePago == 0) {
        errors.idFormaDePago = "Tiene que asignar una forma de pago"
    }

    return errors
}

const options = [
    { value: '1', label: 'Programador' },
    { value: '2', label: 'QA' },
    { value: '3', label: 'Analista' },
    { value: '4', label: 'Quiero ser inversor' },
    { value: '5', label: 'Busco trabajo' },
    { value: '6', label: 'Quiero aprender' },
    { value: '7', label: 'Empleador' }
];



class CrearProyecto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tituloProyecto: "",
            descripcionProyecto: "",
            puestoSolicitado: "",
            limitePersonasProyecto: 0,
            idCategoriaProyecto: 0,
            idFormaDePago: 0,
            esEmpresa: false,
            idResponsable: localStorage.getItem('id'),
            urlImagenProyecto: "https://main--stellar-bublanina-20e9ef.netlify.app/img/comvol.jpg",
            loading: false,
            selectedOption: null,
            proyectoRoles: [],
            errors: {},
            selectedFile: null

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {
        console.log(e.target.name)
        if (e.target.name == "imagen") {
            console.log(e.target.result)
        }

        this.setState(
            {

                ...this.state,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value

            }
        )
    }

    onFileChange = event => {

        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
        console.log(this.state.selectedFile)

    };

    handleChangeSelect = (selectedOption) => {
        let personaRolesFinal = []
        this.setState({ selectedOption }, () =>
            console.log()
        );
        selectedOption.map(sel => {
            personaRolesFinal.push(sel.value)
        })
        this.setState({ proyectoRoles: personaRolesFinal })
    };

    handleSubmit = async event => {
        this.setState({
            loading: true
        })

        event.preventDefault();
        const { errors, ...sinErros } = this.state
        const result = validate(sinErros)
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
            return this.setState({ errors: result })
        }

        try {

            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)

            }
            console.log(config.body)

            let res = await fetch('https://api-production-db96.up.railway.app/proyecto/crear', config)
            let json = await res.json()
            this.setState({
                loading: false
            })

            window.location = '/'

        } catch (error) {

            this.setState({
                loading: false,
                error
            })

        }

    }


    render() {

        const { errors } = this.state
        return (
            <section className='section-form'>
                <form onSubmit={this.handleSubmit} className='form-proyecto'>
                    <h2 className='titulo-proyecto'>Crea tu proyecto</h2>
                    <div class="form-row">
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Titulo del proyecto</label>
                            <input name='tituloProyecto' type="text" class="form-control" id="tituloProyecto"
                                value={this.state.tituloProyecto.value} onChange={this.handleChange} placeholder="Titulo del proyecto..."
                            ></input>
                            {errors.tituloProyecto && <span className='error'>{errors.tituloProyecto}</span>}

                        </div>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Descripcion</label>
                            <textarea id='descripcionProyecto' value={this.state.descripcionProyecto.value} onChange={this.handleChange}
                                name='descripcionProyecto' class="form-control" rows="3" placeholder='Descripcion breve del proyecto'
                                maxLength={200}></textarea>
                            {errors.descripcionProyecto && <span className='error'>{errors.descripcionProyecto}</span>}
                        </div>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Puesto solicitado</label>
                            <textarea id='puestoSolicitado' value={this.state.puestoSolicitado.value} onChange={this.handleChange}
                                name='puestoSolicitado' class="form-control" rows="3" placeholder='Descripcion breve del/los puestos solicitado/s'
                                maxLength={200}></textarea>
                            {errors.puestoSolicitado && <span className='error'>{errors.puestoSolicitado}</span>}
                        </div>
                    </div>
                    <div>
                        <label for="exampleFormControlTextarea1" className='label_proyecto'>Puesto solicitado</label>
                        <Select
                            isMulti
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelect}
                            options={options}
                            name='selectedOption'
                        />
                    </div>
                    <div class='label_proyecto'>
                        <label for="inputAddress" className='label_proyecto'>Cantidad de Integrantes necesarios</label>
                        <input id="limitePersonasProyecto" value={this.state.limitePersonasProyecto.value} onChange={this.handleChange} name='limitePersonasProyecto' type="number" class="form-control" placeholder="1,2,3..."></input>
                        {errors.limitePersonasProyecto && <span className='error'>{errors.limitePersonasProyecto}</span>}
                    </div>
                    <div class="form-row">
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Categoria</label>
                            <select id='idCategoriaProyecto' value={this.state.idCategoriaProyecto.value} onChange={this.handleChange} name='idCategoriaProyecto' class="form-control"  >
                                <option selected>Sin definir</option>
                                <option value={1}>VIDEOJUEGOS</option>
                                <option value={2}>APLICACIONES MOVILES</option>
                                <option value={3}>APLICACIONES WEB</option>
                                <option value={4}>EMPLEOS</option>
                                <option value={5}>INVERSIONES</option>
                                <option value={6}>COMMUNITY MANAGER</option>
                            </select>
                            {errors.idCategoriaProyecto && <span className='error'>{errors.idCategoriaProyecto}</span>}
                        </div>
                        <div class="label_proyecto form-group">
                            <label for="inputState" className='label_proyecto'>Forma de Pago</label>
                            <select id='idFormaDePago' name='idFormaDePago' value={this.state.idFormaDePago.value} onChange={this.handleChange} class="form-control"  >
                                <option selected value={0} >Ingresa una forma de pago</option>
                                <option type="number" value={1}>CONTRATACION</option>
                                <option type="number" value={2}>SIN DEFINIR</option>
                            </select>
                            {errors.idFormaDePago && <span className='error'>{errors.idFormaDePago}</span>}
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="esEmpresa" name='esEmpresa' value={this.state.esEmpresa.value} onChange={this.handleChange} ></input>
                            <label class="form-check-label" for="defaultCheck1"> Es empresa</label>
                        </div>
                    </div>
                    <label for="inputState" className='label_proyecto'>Imagen del proyecto</label>
                    <div class="input-group mb-3 foto">
                        <input type="file" class="form-control" id="imagen" name='imagen' accept='image/*' onChange={this.onFileChange}></input>
                        <label class="input-group-text" for="inputGroupFile02" >jpg,png</label>
                    </div>
                    <div class="form-group">
                    </div>
                    <div class='btn-proyecto'>
                        <button type="submit" class="btn btn-primary">Crear Proyecto</button>
                        <ToastContainer />
                    </div>
                </form>
            </section>

        )

    }
}



export default CrearProyecto;


