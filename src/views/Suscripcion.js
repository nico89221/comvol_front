import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Suscripcion() {

    const tilde =
    <span>
      <FontAwesomeIcon icon={faCheck} />
    </span>

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );


let suscribir = async (e) => {

    try {

        if (localStorage.getItem('id')) {
            console.log("existe")
        } else {

           return  toast.error('Debes estar logueado para suscribirte', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            
        }
        
        let config = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        let res = await fetch('https://apicomvolbackend-production.up.railway.app/persona/alta_suscripcion?id_persona=' + localStorage.getItem('id'), config)
        let json = await res.json()
        console.log(json.descripcion)
        if (json.descripcion == "El usuario ya se encuentraba suscripto") {
            toast.error('Ya tienes suscripcion', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else { 
            /*
            toast.success('Muchas gracias por suscribirte', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            */
            
            //await delay(2000);
            window.location = '/forma_pago';

            
        }

    } catch (error) {


    }
}


    return (
        <section class='section-suscripcion'>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <div class="card" style={{ width: "18rem" }}>
                <img src="https://main--stellar-bublanina-20e9ef.netlify.app/img/comvol.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Suscribite para:</h5>
                    <p class="card-text">{tilde} Tus proyectos destaquen</p>
                    <p class="card-text">{tilde} Podre crear infinidad de proyectos</p>
                    <p class="card-text">{tilde} Mucho mas</p>
                    <div class='btn-sus'>
                        <button onClick={suscribir} class="btn btn-primary">Suscribite</button>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </section>

    )


}

export default Suscripcion;