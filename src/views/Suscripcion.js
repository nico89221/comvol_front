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

                toast.error('Debes estar logueado para suscribirte', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                await delay(2000);
                window.location = '/registrarse';


            }

            let config = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }

            let res = await fetch('https://api-production-db96.up.railway.app/persona/alta_suscripcion?id_persona=' + localStorage.getItem('id'), config)
            let json = await res.json()
            console.log(json.descripcion)
            if (json.descripcion == "El usuario ya se encuentra suscripto") {
                toast.error('Ya tienes suscripción', {
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

                toast.success('Muchas gracias por suscribirte y confiar en nosotros', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });


                await delay(1500);
                window.location = '/proyectos_interes';


            }

        } catch (error) {


        }
    }

    let suscribirPremium = async (e) => {

        try {

            if (localStorage.getItem('id')) {
                console.log("existe")
            } else {

                toast.error('Debes estar logueado para suscribirte', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                await delay(2000);
                window.location = '/registrarse';
               

            }

            let config = {
                method: 'PATCH',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }

            let res = await fetch('https://api-production-db96.up.railway.app/persona/alta_suscripcion?id_persona=' + localStorage.getItem('id'), config)
            let json = await res.json()
            console.log(json.descripcion)
            if (json.descripcion == "El usuario ya se encuentra suscripto") {
                toast.error('Ya tienes suscripción', {
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

                toast.success('Muchas gracias por suscribirte y confiar en nosotros', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });


                await delay(1500);
                window.open(
                    'https://mpago.la/2UPU44r',
                    '_blank' 
                  )

            }

        } catch (error) {


        }
    }


    return (
        <section class='section-suscripcion'>
            <h2 class="subtitle">Suscribite y sumate a la comunidad COMVOL </h2>
            <section style={{ marginBottom: "25px" }}>

                <div class="card" style={{ width: "18rem" }}>
                    <div class="price__element price__element--best">
                        <p class="price__name" style={{ fontSize: "1.2rem" }}>Comvol prime</p>
                        <h3 class="price__price">$1500/mes</h3>

                        <div class="price__items">
                            <p class="price__features" style={{ fontSize: "1.2rem" }}>Propuestas laborales</p>
                            <p class="price__features" style={{ fontSize: "1.2rem" }}>Capacitaciones</p>
                            <p class="price__features" style={{ fontSize: "1.2rem" }}>Descuentos en cursos</p>
                        </div>
                        <a onClick={suscribirPremium} class="price__cta">Empieza ahora</a>
                    </div>
                </div>
            </section>
            <section class="sus-gratuito" >

                <div class="card" style={{ width: "18rem" }}>
                    <div class="price__element">
                        <p class="price__name" style={{ fontSize: "1.2rem" }}>Comvol basic</p>
                        <h3 class="price__price">Gratuito</h3>

                        <div class="price__items">
                            <p class="price__features" style={{ fontSize: "1.2rem" }}>Propuestas de proyectos</p>
                            <p class="price__features" style={{ fontSize: "1.2rem" }}>Charlas con expertos</p>
                            <p class="price__features" style={{ fontSize: "1.2rem" }}>Promociones en cursos</p>
                        </div>

                        <a onClick={suscribir} class="price__cta" >Empieza ahora</a>
                    </div>
                </div>
                <ToastContainer />
            </section>
        </section>

    )


}

export default Suscripcion;