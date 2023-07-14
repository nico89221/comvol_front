import React, { useState } from 'react';

function FilaPerfiles(props) {


    const [datos, estableceDatos] = useState('');

    const padreAHijo = () => {
        estableceDatos(props);
        console.log(datos);
    }

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );



    return (
        <tr>
            <td>{props.email}</td>
            <td>{props.nombre}</td>
            <td>{props.apellido}</td>
            <td>{props.pais}</td>
            <td>{props.provincia}</td>
            <td>{props.localidad}</td>
            <td><a href={props.perfilExterno}>{props.perfilExterno} </a></td>
            <td>{props.suscripcion}</td>
            <td>
                {
                    props.rol.map(r => {
                        return <p>{r} </p>
                    })
                }
            </td>
        </tr>


    )
}





export default FilaPerfiles;


