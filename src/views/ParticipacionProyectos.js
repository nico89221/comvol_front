import React, { useState } from 'react';
import { useEffect } from 'react';
import TarjetaParticipacion from '../components/TarjetaParticipacion';


function ParticipacionProyectos() {

    const [listParticipacion, setListParticipacion] = useState([]);

    if (listParticipacion.length == 0) {

        fetch("https://apicomvolbackend-production.up.railway.app/persona_proyecto/detalle_proyecto_integrante?id_persona=   "+localStorage.getItem("id")+"&pagina=0&cantidad=20")
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setListParticipacion([
                    ...data.content,
                ])

            })


    }

    useEffect(()=>{

        console.log(listParticipacion)
    },[listParticipacion])

    let contenido;
    if (listParticipacion == null) {
        return contenido = <p>cargando</p>;
    }
    else {
        return contenido =

            <section className="principal">

                <h2 className='titulo'><b>Proyectos en lo que participas</b></h2>
                {
                    listParticipacion.map((row, i) => {
                        return <TarjetaParticipacion {...row} key={i} />
                    })
                }

            </section>


    }


}

export default ParticipacionProyectos;

