import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SignInForm from '../components/form/SignInForm'
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { isObjectEmpty } from '../helpers/helpers';
import { loginUser } from '../actions/authActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function IniciarSesion() {

  if (localStorage.getItem('id')) {
    window.location = '/perfil'
  } else {

  }

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  const [errors, setErrors] = useState({});
  const [errorSesion, setErrorSesion] = useState({});
  const dispatch = useDispatch()

  useEffect(() => {

    console.log(errorSesion)
  })

  const login = ({ email, contrasena }) => {
    const errors = {};
    setErrors(errors);

    if (!validator.isEmail(email)) {
      errors.email = "El correo electrónico no es válido"
    }

    if (validator.isEmpty(contrasena)) {
      errors.contrasena = "La contraseña no puede estar vacía"
    }

    if (!isObjectEmpty(errors)) {
      setErrors(errors);
      return;
    }

     dispatch(loginUser({ email, contrasena }))
      .then(response => {

      }).catch( err => {
          toast.error('El usuario y/o contraseña no son correctos', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
          });
        return setErrorSesion( {error: "El usuario y/o contraseña no son correctos"})
      
      })
  }

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card body>
            <h3>Iniciar sesión</h3>
            <SignInForm errors={errors} onSubmitCallback={login}></SignInForm>
            <span className='error'>{errorSesion && errorSesion.error}</span>
            <div className='mt-4'>
              <Link to={"/registrarse"}>Registrate Aquí</Link>
              <ToastContainer />
            </div>
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

