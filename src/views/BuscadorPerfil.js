import React, { useState, useEffect } from 'react';
import Tarjeta from '../components/Tarjeta';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FilaPerfiles from '../components/FilaPerfiles';

function BuscadorPerfil() {

    const [listResultados, setListResultados] = useState(null);
    const [buscar, setBuscar] = useState({
        rol: "",
        pais: ""
    });

    const search =
        <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>

    useEffect(() => {
        fetch("https://apicomvolbackend-production.up.railway.app/persona/filtrar?id_rol=&pagina=0&cantidad=20&id_pais=")
            .then(response => response.json())
            .then((data) => {

                setListResultados(data.content)
                console.log(data.content)

            })
    }, [])

    useEffect(()=>{
        console.log(listResultados)
    },[listResultados])

    let handleChange = (e) => {


        console.log("entra")
        setBuscar(
            {
                ...buscar,
                [e.target.name]: e.target.value == 0 ? "" : e.target.value,
            })

    }

    useEffect(() => {
        console.log(buscar)
    }, [buscar])


    let handleSubmit = async event => {
        event.preventDefault()

        console.log(buscar)
        let url = "https://apicomvolbackend-production.up.railway.app/persona/filtrar?id_rol="+buscar.rol+"&pagina=0&cantidad=20&id_pais=" + buscar.pais;
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setListResultados(data.content)
                console.log(data.content)

            })


    }

    let contenido;
    if (listResultados == null) {
        return <p>cargando</p>;
    } else {
        return (
            <section class='section-busqueda'>
                <form class='form-buscador' onSubmit={handleSubmit}>
                    <div class='filtrar'>
                        <h5>Filtrar por:</h5>
                    </div>
                    <div class='selector-proyecto'>
                        <select class="form-control" aria-label="Default select example" id='rol' name='rol' onChange={handleChange}>
                            <option selected value={0}>Rol</option>
                            <option value={1}>Desarrollador Backend Java</option>
                            <option value={2}>Desarrolador Frontend Angular</option>
                        </select>
                    </div>
                    <div class='selector-proyecto'>
                        <select class="form-control" aria-label="Default select example" id='pais' name='pais' onChange={handleChange}>
                            <option selected value={0}>Pais</option>
                            <option value={1}>Argentina</option>
                        </select>
                    </div>
                    <div class='button-proyecto'>
                        <button type="submit" class="btn btn-primary">{search}</button>

                    </div>
                </form>
                <div className='titulo-perfil'>
                <h2 class='titulo-mis-proyectos'>Perfiles</h2>
                </div>
                <section class='section-busqueda'>
                    <table class="table table-striped">
                        <thead class="table-dark">
                            <tr>
                                <td>Email</td>
                                <td>Nombre</td>
                                <td>Apellido</td>
                                <td>Pais</td>
                                <td>Provincia</td>
                                <td>Localidad</td>
                                <td>Perfil Externo</td>
                                <td>Suscripto</td>
                                <td>Rol</td>    
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listResultados.map((row, i) => {
                                    return <FilaPerfiles {...row} key={i} />
                                })
                            }
                        </tbody>
                    </table>
                </section>
            </section>
        )

    }
}

export default BuscadorPerfil;