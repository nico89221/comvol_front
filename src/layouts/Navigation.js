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
  let buscarPostulante
  let proyectosInteres
  let buscarProyecto;
  let recruiting;

  if (localStorage.getItem("esEmpresa") && localStorage.getItem("esEmpresa") == "SI") {
    buscarPostulante = <Nav.Link as={NavLink} to="/buscar_perfiles" style={{ fontSize: 14 }}>Buscar perfiles</Nav.Link>
  } else {
    buscarPostulante = <p></p>
  }

  if (localStorage.getItem("tipoUsuario") && localStorage.getItem("tipoUsuario") == 2) {
    console.log("entra tipo usuario")
    tipoUsuario = <NavDropdown title={titleAdmin} id='menu-dropdown'>
      <NavDropdown.Item as={NavLink} to="/buscar_perfiles" style={{ fontSize: 14 }}>Buscar perfiles</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/buscar_proyectos" style={{ fontSize: 14 }} >Buscar proyectos</NavDropdown.Item>
    </NavDropdown>
  } else {
    tipoUsuario = <p></p>
  }

  if (localStorage.getItem("id")) {
    inicio = <p></p>
    usuario = <NavDropdown title={title} id='menu-dropdown' >
      <NavDropdown.Item as={NavLink} to="/perfil" style={{ fontSize: 14 }}>Perfil</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/mis_proyectos" style={{ fontSize: 14 }}>Mis Proyectos</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/mis_postulaciones" style={{ fontSize: 14 }}>Mis Postulaciones</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/participacion_proyectos" style={{ fontSize: 14 }}>Proyectos que participas</NavDropdown.Item>
      <NavDropdown.Item as={NavLink} to="/cerrar_sesion" style={{ fontSize: 14 }}>Cerrar sesión</NavDropdown.Item>
    </NavDropdown>
    suscribirse = <Nav.Link as={NavLink} to="/suscribirse" style={{ fontSize: 14 }}>Suscribite</Nav.Link>
    proyectosInteres = <Nav.Link as={NavLink} to="/proyectos_interes" style={{ fontSize: 14 }}>Proyectos de Interés</Nav.Link>
    registrarse = <p></p>
    buscarProyecto = <Nav.Link as={NavLink} to="/buscar_proyectos" style={{ fontSize: 14 }}>Buscar Proyectos</Nav.Link>
    recruiting = <Nav.Link as={NavLink} to="/recruiting" style={{ fontSize: 14 }}>Búsqueda y Selección</Nav.Link>
  } else {
    inicio = <Nav.Link as={NavLink} to="/sigin" style={{ fontSize: 14 }}>Iniciar sesión</Nav.Link>;
    usuario = <p></p>
    suscribirse = <p></p>
    registrarse = <Nav.Link as={NavLink} to='/registrarse' style={{ fontSize: 14 }}>Registrarse</Nav.Link>
    proyectosInteres = <p></p>
    buscarProyecto = <p></p>
    recruiting = <p></p>
  }

  return (
    <Navbar bg='dark' variant='dark' expand="lg">
      <Navbar.Brand as={NavLink} to='/'><img src="https://main--stellar-bublanina-20e9ef.netlify.app/img/logo2.png" class="logo" alt="..." /></Navbar.Brand>
      <NavbarToggle aria-controls='main-menu'></NavbarToggle>
      <Navbar.Collapse id='main-menu' className='main-menu'>
        <Nav >
          <Nav.Link as={NavLink} to="/quienes_somos" style={{ fontSize: 14 }}>Quiénes somos</Nav.Link>
          {registrarse}
          {inicio}
          {buscarProyecto}
          {buscarPostulante}
          {proyectosInteres}
          {suscribirse}
          {recruiting}
          {usuario}
          {tipoUsuario}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
