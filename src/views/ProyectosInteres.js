import React, { useState, useEffect } from 'react';
import Tarjeta from '../components/Tarjeta';

function ProyectosInteres() {


    if (localStorage.getItem('id')) {
        console.log("existe")
     } else {
         window.location = '/'
     }

    const [perfil, setPerfil] = useState(null);
    const [listProyectos, setListProyecto] = useState([]);

    let url = 'https://api-production-db96.up.railway.app/persona/detalle?id_persona=' + localStorage.getItem('id');
    
    if(perfil == null){
            fetch(url)
                .then(response => response.json())
                .then((data) => {
                    if (data.descripcion == "El usuario ya se encuentra dado de baja") {
                        localStorage.removeItem('id')
                        localStorage.removeItem('tipoUsuario')
                        localStorage.removeItem('esEmpresa')
                        window.location = '/'
                    } else {
                        setPerfil(data)
                    }
                },[])
    
    }
   

 

    if (listProyectos.length == 0 && perfil) {

        let roles = perfil.roles.map(r => "&id_rol="+r.idRol)

        console.log("los roles son:")
        console.log(roles)

        fetch("https://api-production-db96.up.railway.app/proyecto/filtrar?id_categoria="+perfil.idCategoria+"&id_estado=1&id_rol="+roles)
        .then(response => response.json())
        .then(function (data) {

            console.log("La data es: " + data.content)
            setListProyecto([
                ...data.content,
            ])

        },[]);

    }

    let contenido;
    if (listProyectos == null) {
        return contenido = <p>cargando</p>;
    }
    else {
        return contenido =

            <section className="principal">

                <h2 className='titulo'><b>Proyectos que te pueden interesar por tu Rol y Categoría</b></h2>
                {
                    listProyectos.map((row, i) => {
                        return <Tarjeta {...row} key={i} />
                    })
                }

            </section>


    }


}

export default ProyectosInteres;

