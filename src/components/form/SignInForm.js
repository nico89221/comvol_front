import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function SignInForm({ errors, onSubmitCallback }) {

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const submitForm = (e) => {

        e.preventDefault();
        onSubmitCallback({ email, contrasena });
    }

    return (
        <Form onSubmit={submitForm}>
            <Form.Group control="email" className='label-inicio'>
                <Form.Label>Email : </Form.Label>
                <Form.Control
                    type='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Correo Electronico"
                    isInvalid={errors.email}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.email}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group control="contrasena" className='label-inicio'>
                <Form.Label>Contraseña : </Form.Label>
                <Form.Control
                    type='password'
                    value={contrasena}
                    onChange={e => setContrasena(e.target.value)}
                    placeholder="Contraseña"
                    isInvalid={errors.contrasena}
                />
                <Form.Control.Feedback type='invalid'>
                    {errors.contrasena}
                </Form.Control.Feedback>
            </Form.Group>

            <div>
                <Button variant='primary' type='submit' className='btn-inicio'>Iniciar sesion</Button>
            </div>
        </Form>
    )
}
