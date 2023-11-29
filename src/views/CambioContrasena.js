import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'


const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

const validate = values => {
    const errors = {}

    console.log("cantidad=" + values.cantidadIntegrantes)

    if (validator.isStrongPassword(values.nuevaContrasena, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
    } else {
        errors.nuevaContrasena = "Debe tener al menos 8 caracteres, una mayuscula, un numero,un caracter especial"
        errors.nuevaReContrasena = "Debe tener al menos 8 caracteres, una mayuscula, un numero,un caracter especial"
    }

    if (values.actualContrasena == "") {
        errors.actualContrasena = "Este campo es obligatorio"
    }
    if (values.nuevaContrasena == "") {
        errors.recontrasena = "Este campo es obligatorio"
    }
    if (values.nuevaReContrasena == "") {
        errors.recontrasena = "Este campo es obligatorio"
    }
    if (values.nuevaContrasena != values.nuevaReContrasena) {
        errors.nuevaContrasena = "Las contraseñas no coinciden"
        errors.nuevaReContrasena = "Las contraseñas no coinciden"
    }

    

    return errors
}

let url = 'https://api-production-db96.up.railway.app/persona/modificar_contrasena?id_persona=' + localStorage.getItem('id');

class CambioContrasena extends React.Component {
    



    constructor(props) {
        super(props);
        this.state = {
            actualContrasena: "",
            nuevaContrasena: "",
            nuevaReContrasena:"",
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
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)

        }
        console.log(config.body)

        let res = await fetch(url, config)
        let json = await res.json()
        console.log(json)
        this.setState({
            loading: false
        })
        if (res.status == 200) {
            toast.success('Su contraseña ha sido cambiada con exito', {
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
        if (json.descripcion == "El usuario y/o contraseña no son correctos") {
            toast.warn('Las contraseñas no son correctas', {
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
                <h2 className='titulo-proyecto'>Modificar Contraseña</h2>
                <div class="form-group" >
                    <label for="inputEmail4" className='label_proyecto'>Contraseña actual</label>
                    <input name='actualContrasena' type="password" class="form-control" id="actualContrasena"
                        value={this.state.actualContrasena.value} onChange={this.handleChange} placeholder="Contraseña..."
                    ></input>
                    {errors.actualContrasena && <span className='error'>{errors.actualContrasena}</span>}
                </div>
                <div class="form-group" >
                    <label for="inputEmail4" className='label_proyecto'>Contraseña nueva</label>
                    <input name='nuevaContrasena' type="password" class="form-control" id="nuevaContrasena"
                        value={this.state.nuevaContrasena.value} onChange={this.handleChange} placeholder="Contraseña..."
                    ></input>
                    {errors.nuevaContrasena && <span className='error'>{errors.nuevaContrasena}</span>}
                </div>
                <div class="form-group" >
                    <label for="inputEmail4" className='label_proyecto'>Repetir contraseña nueva</label>
                    <input name='nuevaReContrasena' type="password" class="form-control" id="nuevaReContrasena"
                        value={this.state.nuevaReContrasena.value} onChange={this.handleChange} placeholder="Repetir contraseña..."
                    ></input>
                    {errors.nuevaReContrasena && <span className='error'>{errors.nuevaReContrasena}</span>}
                </div>
                <div class="form-group">
                </div>
                <div class='btn-proyecto'>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                    <ToastContainer />
                </div>
            </form>
        </section >

    )

}
    }

export default CambioContrasena;


