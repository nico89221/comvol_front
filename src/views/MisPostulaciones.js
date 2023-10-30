import React, { useState } from 'react';
import TarjetaPostulacion from '../components/TarjetaPostulacion';
import { useEffect } from 'react';


function MisPostulaciones() {

    const [listPostulaciones, setListPostulaciones] = useState([]);
    let urlBuscarProyecto = '../buscar_proyectos'

    useEffect(()=>{

        fetch("http://localhost:8080/persona_proyecto/detalle_postulacion_persona?id_persona="+localStorage.getItem("id")+"&pagina=0&cantidad=20")
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setListPostulaciones([
                    ...data.content,
                ])

            },[])
    },[])

    let contenido;
    if (listPostulaciones == null) {
        return contenido = <p>cargando</p>;
    }
    else {
        if(listPostulaciones.length != 0){
            return contenido =

            <section className="principal">

                <h2 className='titulo'><b>Mis postulaciones</b></h2>
                {
                    listPostulaciones.map((row, i) => {
                        return <TarjetaPostulacion {...row} key={i} />
                    })
                }

            </section>
        }else{

            return contenido =

            <section className="principal">

                <h2 className='titulo'><b>Aun no tienes postulaciones que estas esperando a buscar proyectos y postularte</b></h2>
                <a class="btn btn-success" style={{fontSize:24,margin:24}} href={urlBuscarProyecto}>Buscar proyecto y postularse</a>

            </section>

        }
        


    }


}

export default MisPostulaciones;

