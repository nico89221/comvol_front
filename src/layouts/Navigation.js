import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons'


export default function Navigation() {

  const title =
    <span>
      <FontAwesomeIcon icon={faUser} />
    </span>
  const titleAdmin =
    <span>
      <FontAwesomeIcon icon={faRobot} />
    </span>

  let inicio;
  let usuario;
  let tipoUsuario;
  let suscribirse;
  let registrarse;

  if (localStorage.getItem("tipoUsuario") && localStorage.getItem("tipoUsuario") == 2) {
    console.log("entra tipo usuario")
    tipoUsuario = <NavDropdown title={titleAdmin} id='menu-dropdown'>
      <NavDropdown.Item as={NavLink} to="/buscar_perfiles">Buscar perfiles</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/buscar_proyectos" >Buscar proyectos</NavDropdown.Item>
    </NavDropdown>
  } else {
    tipoUsuario = <p></p>
    
  }

  if (localStorage.getItem("id")) {
    inicio = <p></p>
    usuario = <NavDropdown title={title} id='menu-dropdown' >
      <NavDropdown.Item as={NavLink} to="/perfil">Perfil</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/mis_proyectos">Mis Proyectos</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/mis_postulaciones">Mis Postulaciones</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/participacion_proyectos">Proyectos que participas</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/cerrar_sesion">Cerrar sesion</NavDropdown.Item>
    </NavDropdown>
    suscribirse = <Nav.Link as={NavLink} to="/suscribirse">Suscribite</Nav.Link>
    registrarse = <p></p>
  } else {
    inicio = <Nav.Link as={NavLink} to="/sigin">Iniciar Sesion</Nav.Link>;
    usuario = <p></p>
    suscribirse = <p></p>
    registrarse = <Nav.Link as={NavLink} to='/registrarse'>Registrarse</Nav.Link>
  }

  return (
    <Navbar bg='dark' variant='dark' expand="lg">
      <Navbar.Brand as={NavLink} to='/'><img src="https://main--stellar-bublanina-20e9ef.netlify.app/img/logo2.png" class="logo" alt="..." /></Navbar.Brand>
      <NavbarToggle aria-controls='main-menu'></NavbarToggle>
      <Navbar.Collapse id='main-menu' className='main-menu'>
        <Nav >
          {registrarse}
          {inicio}
          <Nav.Link as={NavLink} to="/buscar_proyectos">Buscar Proyectos</Nav.Link>
          {suscribirse}
          {usuario}
          {tipoUsuario}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
