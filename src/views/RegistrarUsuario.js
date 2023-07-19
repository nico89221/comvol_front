import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const validate = values => {
    const errors = {}

    console.log("cantidad=" + values.cantidadIntegrantes)

    if (values.nombre == "") {
        errors.nombre = "Este campo es obligatorio"
    }
    if (values.email == "") {
        errors.email = "Este campo es obligatorio"
    }
    if (values.acercaDe == "") {
        errors.acercaDe = "Este campo es obligatorio"
    }
    if (values.contrasena == "") {
        errors.contrasena = "Este campo es obligatorio"
    }
    if (values.recontrasena == "") {
        errors.contrasena = "Este campo es obligatorio"
    }
    if (values.pais == 0) {
        errors.pais = "Tienes que asignar un pais"
    }
    if (values.provincia == "") {
        errors.provincia = "Este campo es obligatorio"
    }
    if (values.localidad == "") {
        errors.localidad = "Este campo es obligatorio"
    }
    if (values.contrasena == "") {
        errors.contrasena = "Este campo es obligatorio"
    }
    if (values.recontrasena == "") {
        errors.recontrasena = "Este campo es obligatorio"
    }
    if (values.perfilExterno == "") {
        errors.perfilExterno = "Este campo es obligatorio"
    }
    if (values.personaRoles == 0) {
        errors.personaRoles = "Tienes que asignar al menos un rol"
    }
    if (values.contrasena != values.recontrasena) {
        errors.contrasena = "Las contraseñas no coinciden"
    }

    return errors
}

class RegistrarUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            acercaDe: "",
            contrasena: "",
            recontrasena: "",
            pais: 0,
            provincia: "",
            localidad: "",
            perfilExterno: "",
            personaRoles: [],
            loading: false,
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e) {

        this.setState(
            {

                ...this.state,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.id === 'personaRoles' ? [e.target.value] : e.target.value

            }
        )
    }

    handleSubmit = async event => {
        this.setState({
            loading: true
        })

        event.preventDefault();
        const { errors, ...sinErros } = this.state
        const result = validate(sinErros)
        if (Object.keys(result).length) {
            toast.warn('Campos invalidos o vacios', {
                position: "top-center",
                autoClose: 10000,
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

            let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona/crear', config)
            let json = await res.json()
            console.log(json)
            this.setState({
                loading: false
            })
            if (res.status == 200) {
                toast.success('Te has registrado con exito', {
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
                window.location = '/sigin'
            }
            if (json.descripcion == "El usuario ya se encuentra previamente registrado en nuestro sistema") {
                toast.warn('El email ya se encuentra registrado', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }



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
                    <h2 className='titulo-proyecto'>Registrarse</h2>
                    <div class="form-row">
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Nombre/Empresa</label>
                            <input name='nombre' type="text" class="form-control" id="nombre"
                                value={this.state.nombre.value} onChange={this.handleChange} placeholder="Nombre o Empresa..."
                            ></input>
                            {errors.nombre && <span className='error'>{errors.nombre}</span>}
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Apellido</label>
                            <input name='apellido' type="text" class="form-control" id="apellido"
                                value={this.state.apellido.value} onChange={this.handleChange} placeholder="No es obligatorio si es una empresa"
                            ></input>
                            {errors.apellido && <span className='error'>{errors.apellido}</span>}
                        </div>
                        <div class="form-group" >
                            <label for="inputEmail4" className='label_proyecto'>Email</label>
                            <input name='email' type="email" class="form-control" id="email"
                                value={this.state.email.value} onChange={this.handleChange} placeholder="Email@email.com..."
                            ></input>
                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>
                        <div class='label_proyecto' >
                            <label for="exampleFormControlTextarea1" className='label_proyecto'>Acerca de</label>
                            <textarea id='acercaDe' value={this.state.acercaDe.value} onChange={this.handleChange}
                                name='acercaDe' class="form-control" rows="3" placeholder='Contanos un poco sobre vos o tu empresa..'
                            ></textarea>
                            {errors.acercaDe && <span className='error'>{errors.acercaDe}</span>}
                        </div>
                    </div>
                    <div class="form-row">
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Pais</label>
                            <select id='pais' value={this.state.pais.value} onChange={this.handleChange} name='pais' class="form-control"  >
                                <option selected>Sin definir</option>
                                <option value={1}>Argentina</option>
                                <option value={2}>Chile</option>
                                <option value={3}>Uruguay</option>
                                <option value={4}>Paraguay</option>
                                <option value={5}>Brasil</option>
                                <option value={6}>Bolivia</option>
                                <option value={7}>Ecuador</option>
                                <option value={8}>Peru</option>
                                <option value={9}>Mexico</option>
                            </select>
                            {errors.pais && <span className='error'>{errors.pais}</span>}
                        </div>
                    </div>
                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Provincia</label>
                        <input name='provincia' type="text" class="form-control" id="provincia"
                            value={this.state.provincia.value} onChange={this.handleChange} placeholder="Buenos Aires,...."
                        ></input>
                        {errors.provincia && <span className='error'>{errors.provincia}</span>}
                    </div>
                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Localidad</label>
                        <input name='localidad' type="text" class="form-control" id="localidad"
                            value={this.state.localidad.value} onChange={this.handleChange} placeholder="San Martin,.."
                        ></input>
                        {errors.localidad && <span className='error'>{errors.localidad}</span>}
                    </div>
                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Perfil Externo</label>
                        <input name='perfilExterno' type="text" class="form-control" id="perfilExterno"
                            value={this.state.perfilExterno.value} onChange={this.handleChange} placeholder="Perfil linkldn, Git,.."
                        ></input>
                        {errors.perfilExterno && <span className='error'>{errors.perfilExterno}</span>}
                    </div>
                    <div class="form-row">
                        <div class='label_proyecto'>
                            <label for="inputState" className='label_proyecto'>Rol</label>
                            <select id='personaRoles' value={this.state.personaRoles.value} onChange={this.handleChange} name='personaRoles' class="form-control"  >
                                <option selected>Sin definir</option>
                                <option value={1}>Programador</option>
                                <option value={2}>QA</option>
                                <option value={3}>Analista</option>
                                <option value={4}>Quiero ser inversor</option>
                                <option value={5}>Busco trabajo</option>
                                <option value={6}>Quiero aprender</option>
                                <option value={6}>Empleador</option>
                            </select>
                            {errors.personaRoles && <span className='error'>{errors.personaRoles}</span>}
                        </div>
                    </div>
                    <label for="inputState" className='label_proyecto'>Foto de perfil</label>
                    <div class="input-group mb-3 foto">
                        <input type="file" class="form-control" id="inputGroupFile02"></input>
                        <label class="input-group-text" for="inputGroupFile02" >jpg,png</label>
                    </div>
                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Contraseña</label>
                        <input name='contrasena' type="password" class="form-control" id="contrasena"
                            value={this.state.contrasena.value} onChange={this.handleChange} placeholder="Contraseña..."
                        ></input>
                        {errors.contrasena && <span className='error'>{errors.contrasena}</span>}
                    </div>
                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Repetir contraseña</label>
                        <input name='recontrasena' type="password" class="form-control" id="recontrasena"
                            value={this.state.recontrasena.value} onChange={this.handleChange} placeholder="Repetir contraseña..."
                        ></input>
                        {errors.recontrasena && <span className='error'>{errors.recontrasena}</span>}
                    </div>
                    <div class="form-group">
                    </div>
                    <div class='btn-proyecto'>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                        <ToastContainer />
                    </div>
                </form>
            </section>

        )

    }
}



export default RegistrarUsuario;


