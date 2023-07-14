import React, { useState } from 'react';
import TarjetaPostulacion from '../components/TarjetaPostulacion';
import { useEffect } from 'react';


function MisPostulaciones() {

    const [listPostulaciones, setListPostulaciones] = useState([]);

    if (listPostulaciones.length == 0) {

        fetch("https://apicomvolbackend-production.up.railway.app/persona_proyecto/detalle_postulacion_persona?id_persona="+localStorage.getItem("id")+"&pagina=0&cantidad=20")
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setListPostulaciones([
                    ...data.content,
                ])

            })


    }

    useEffect(()=>{

        console.log(listPostulaciones)
    },[listPostulaciones])

    let contenido;
    if (listPostulaciones == null) {
        return contenido = <p>cargando</p>;
    }
    else {
        return contenido =

            <section className="principal">

                <h2 className='titulo'><b>Mis postulaciones</b></h2>
                {
                    listPostulaciones.map((row, i) => {
                        return <TarjetaPostulacion {...row} key={i} />
                    })
                }

            </section>


    }


}

export default MisPostulaciones;

