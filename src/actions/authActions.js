import axios from "axios";
import { useState } from "react";
import { SET_CURRENT_USER } from "./types";

export const loginUser = (userData) => dispatch => {

    console.log(userData)

    return new Promise((resolve, reject) => {
        axios.post('https://api-production-db96.up.railway.app/persona/inicio_sesion', userData, {
            headers: { 'Accept': 'application/json', 'Content-type': 'application/json' }
        }).then(response => {
            console.log("por el response")
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('tipoUsuario', response.data.tipoUsuario)
            localStorage.setItem('esEmpresa',response.data.esEmpresa)
            dispatch(setCurrentUser({user:response.data.id,loggedIn:true}));
            resolve(response)
            if(response.data.esEmpresa == "NO"){
                window.location = '/proyectos_interes'
            }else{
                window.location = '/buscar_perfiles'
            }
            
        }).catch(error => {
            reject(error)
            console.log("tiro 400")
            if(error.response.status == 400){
                return error.response.data.descripcion
              }
        })
    });
}

export const setCurrentUser = ({user,loggedIn}) =>{
    return {
        type: SET_CURRENT_USER,
        payload:{user,loggedIn}
    }
}