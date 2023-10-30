import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./layouts/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import IniciarSesion from "./views/IniciarSesion";
import ProyectosPrincipal from "./views/ProyectosPrincipal";
import store from "./store";
import { Provider } from "react-redux";
import DetalleProyecto from "./views/DetalleProyecto";
import CrearProyecto from "./views/CrearProyecto";
import DetalleProyectoCreado from "./views/DetalleProyectoCreado";
import VistaProyectoCreado from "./views/VistaProyectoCreado";
import EditarProyecto from "./views/EditarProyecto";
import RegistrarUsuario from "./views/RegistrarUsuario";
import PerfilUsuario from "./views/PerfilUsuario";
import EditarUsuario from "./views/EditarUsuario";
import BuscadorProyecto from "./views/BuscadorProyecto";
import Suscripcion from "./views/Suscripcion";
import CerrarSesion from "./views/CerrarSesion";
import Postularse from "./views/Postularse";
import VerPostulaciones from "./views/VerPostulaciones";
import Integrantes from "./views/Integrantes";
import MisPostulaciones from "./views/MisPostulaciones";
import ParticipacionProyectos from "./views/ParticipacionProyectos";
import BuscadorPerfil from "./views/BuscadorPerfil";
import FormaDePagoCard from "./components/FormaDePagoCard";
import ProyectosInteres from "./views/ProyectosInteres";
import QuienesSomos from "./views/QuienesSomos";
import CambioContrasena from "./views/CambioContrasena";
import Footer from "./layouts/Footer";
import EnviarForm from "./views/EnviarForm";
import { Reclutar } from "./views/Reclutar";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navigation></Navigation>
        </div>
        <Container>
          <Routes>
            <Route exact path="/" Component={ProyectosPrincipal}></Route>
            <Route exact path="/sigin" Component={IniciarSesion}></Route>
            <Route exact path="/detalle_proyecto/:id" Component={DetalleProyecto}></Route>
            <Route exact path="/crear_proyecto" Component={CrearProyecto}></Route>
            <Route exact path="/mis_proyectos" Component={DetalleProyectoCreado}></Route>
            <Route exact path="/mis_proyectos/vista_proyecto/:id" Component={VistaProyectoCreado}></Route>
            <Route exact path="/mis_proyectos/editar_proyecto/:id" Component={EditarProyecto}></Route>
            <Route exact path="/registrarse" Component={RegistrarUsuario}></Route>
            <Route exact path="/perfil" Component={PerfilUsuario}></Route>
            <Route exact path="/perfil/editar" Component={EditarUsuario}></Route>
            <Route exact path="/buscar_proyectos" Component={BuscadorProyecto}></Route>
            <Route exact path="/suscribirse" Component={Suscripcion}></Route>
            <Route exact path="/cerrar_sesion" Component={CerrarSesion}></Route>
            <Route exact path="/postularse/:id" Component={Postularse}></Route>
            <Route exact path="/mis_proyectos/postulaciones/:id" Component={VerPostulaciones}></Route>
            <Route exact path="/mis_proyectos/integrantes/:id" Component={Integrantes}></Route>
            <Route exact path="/mis_postulaciones" Component={MisPostulaciones}></Route>
            <Route exact path="/participacion_proyectos" Component={ParticipacionProyectos}></Route>
            <Route exact path="/buscar_perfiles" Component={BuscadorPerfil}></Route>
            <Route exact path="/forma_pago" Component={FormaDePagoCard}></Route>
            <Route exact path="/proyectos_interes" Component={ProyectosInteres}></Route>
            <Route exact path="/quienes_somos" Component={QuienesSomos}></Route>
            <Route exact path="/modificar_contrasena" Component={CambioContrasena}></Route>
            <Route exact path="/enviar_form" Component={EnviarForm}></Route>
            <Route exact path="/recruiting" Component={Reclutar}></Route>
          </Routes>
        </Container>
      </Router>
      <Footer></Footer>
    </Provider>

  );
}

export default App;
