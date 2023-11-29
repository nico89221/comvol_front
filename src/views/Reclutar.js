import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';


const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

export const Reclutar = () => {

    const form = useRef();

    const sendEmail = async(e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mhxfcbr', 'template_vxli6kp', form.current, 'UubOdUhuE_6wNw6eM')
        .then((result) => {
            console.log(result.text);
            toast.success('Se ha enviado con éxito', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            
        }, (error) => {
            console.log(error.text);
        });
        await delay(3000);
        window.location = '/'
    };


        return (
            <section className='section-form'>
                <form ref={form} onSubmit={sendEmail} className='form-proyecto'>
                    <h2 className='titulo-proyecto'><b>Búsqueda y selección</b></h2>
                    <p class="about__paragraph" style={{paddingTop:"25px"}}> El éxito de nuestro servicio se basa en la especialización del más exigente sistema de búsqueda y selección de personal del mercado,
                        con el propósito de satisfacer las demandas particulares de cada uno de los proyectos de nuestras empresas cliente.
                    </p>
                    <p class="about__paragraph"> Contamos con un equipo de trabajo especializado en el reclutamiento y la selección de perfiles idóneos para su negocio. Con el objetivo de satisfacer las necesidades
                        de nuestros clientes de la manera más eficiente, ofrecemos servicios de:
                    </p>
                    <p class="about__paragraph"> Selección tradicional, Jóvenes profesionales, Head Hunting RPO y Reclutamiento.
                        Brindamos servicios a medida, con la más alta calidad de prestación y efectividad, para favorecer la optimización de costos.
                    </p>
                    <h3 className='titulo-proyecto' style={{paddingTop:"25px"}}><b>Contáctenos</b></h3>
                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Nombre y Apellido</label>
                        <input name='user_name' type="text" class="form-control" id="contrasena"      
                        ></input>
                    </div>
                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Email</label>
                        <input name='user_email' type="email" class="form-control" id="contrasena"
                        ></input>
                    </div>

                    <div class="form-group" >
                        <label for="inputEmail4" className='label_proyecto'>Descripción</label>
                        <textarea id='descripcionProyecto'
                            name='message' class="form-control" rows="3" 
                            maxLength={200}></textarea>
                    </div>
                    <div class="form-group">
                    </div>
                    <div class='btn-proyecto'>
                        <button type="submit" class="btn btn-primary">Enviar</button>
                        <ToastContainer />
                    </div>
                </form>
            </section >

        );

    
}




