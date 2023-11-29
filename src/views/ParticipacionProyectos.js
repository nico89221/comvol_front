import React, { useState } from 'react';
import { useEffect } from 'react';
import TarjetaParticipacion from '../components/TarjetaParticipacion';
let urlBuscarProyecto = '../buscar_proyectos'


function ParticipacionProyectos() {

    const [listParticipacion, setListParticipacion] = useState([]);

    useEffect(()=>{

        fetch("https://api-production-db96.up.railway.app/persona_proyecto/detalle_proyecto_integrante?id_persona=   "+localStorage.getItem("id")+"&pagina=0&cantidad=20")
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setListParticipacion([
                    ...data.content,
                ])

            },[])
    },[])
    

    useEffect(()=>{

        console.log(listParticipacion)
    },[listParticipacion])

    let contenido;
    if (listParticipacion == null) {
        return contenido = <p>cargando</p>;
    }
    else {

        if(listParticipacion.length != 0){
            return contenido =

            <section className="principal">

                <h2 className='titulo'><b>Proyectos en lo que participas</b></h2>
                {
                    listParticipacion.map((row, i) => {
                        return <TarjetaParticipacion {...row} key={i} />
                    })
                }

            </section>
        }else{
            return contenido =

            <section className="principal">

                <h2 className='titulo'><b>¿Aún no participas de ningun proyecto?. No te desanimes y segui buscando</b></h2>
                <a class="btn btn-success" style={{fontSize:24,margin:24}} href={urlBuscarProyecto}>Buscar proyecto y postularse</a>

            </section>
        }
        


    }


}

export default ParticipacionProyectos;

