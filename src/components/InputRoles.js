import React, { useState } from 'react';
import EditarProyecto from '../views/EditarProyecto';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function InputRoles(props) {

console.log(props)

    return (

            <input name='rol' type="text" class="form-control" id="rol"
                value={props.personaRoles} ></input>
        
    )
}





export default InputRoles;


