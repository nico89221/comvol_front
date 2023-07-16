import React, { useState, useEffect } from 'react';
import Tarjeta from '../components/Tarjeta';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BuscadorProyecto() {

    const [resultados, setResultados] = useState(null);
    const [buscar, setBuscar] = useState({
        categoria :"",
        estado:""
    });

    const search =
    <span>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </span>

    useEffect(() => {
        fetch("https://apicomvolbackend-production.up.railway.app/proyecto/filtrar?id_categoria=&id_estado=")
            .then(response => response.json())
            .then((data) => {

                setResultados(data.content)
                console.log(data.content)

            })
    },[])

    let handleChange = (e) => {

       
        console.log("entra")
        setBuscar(
            {
                ...buscar,
                [e.target.name]: e.target.value == 0  ? "": e.target.value,
            })

    }

    useEffect(()=>{
        console.log(buscar)
    },[buscar])


    let handleSubmit = async event => {
        event.preventDefault()
      
        console.log(buscar)
        let url = "https://apicomvolbackend-production.up.railway.app/proyecto/filtrar?id_categoria="+buscar.categoria+"&id_estado="+buscar.estado;
        console.log(url)
        fetch(url)
            .then(response => response.json())
            .then((data) => {

                setResultados(data.content)
                console.log(data.content)

            })

    
    }

    let contenido;
    if (resultados == null) {
        return  <p>cargando</p>;
    } else {
        return (
            <section class='section-busqueda'>
                <form class='form-buscador' onSubmit={handleSubmit}>
                    <div class='filtrar'>
                        <h5>Filtrar por:</h5>
                    </div>
                    <div class='selector-proyecto'>
                        <select class="form-control" aria-label="Default select example" id='categoria' name='categoria' onChange={handleChange}>
                            <option selected value={0}>Categoria</option>
                            <option value={1}>VIDEOJUEGOS</option>
                            <option value={2}>APLICACIONES MOVILES</option>
                            <option value={3}>APLICACIONES WEB</option>
                            <option value={4}>EMPLEOS</option>
                            <option value={5}>INVERSIONES</option>
                            <option value={6}>COMMUNITY MANAGER</option>
                        </select>
                    </div>
                    <div class='selector-proyecto'>
                        <select class="form-control" aria-label="Default select example" id='estado' name='estado' onChange={handleChange}>
                            <option selected value={0}>Estado</option>
                            <option value={1}>Abierto a postulacion</option>
                            <option value={2}>En desarollo</option>
                            <option value={3}>Cancelado</option>
                            <option value={4}>Finalizado</option>
                        </select>
                    </div>
                    <div class='button-proyecto'>
                        <button type="submit" class="btn btn-primary">{search}</button>
                        
                    </div>
                </form>
                <div className='resultado'>
                    {
                        resultados.map((row, i) => {
                            return <Tarjeta {...row} key={i} />
                        })
                    }

                </div>
            </section>
        )

    }
}

export default BuscadorProyecto;