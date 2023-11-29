import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet"

function EnviarForm() {


    return (


        <section >
            <Helmet>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
                <script type="text/javascript">
                    emailjs.init('UubOdUhuE_6wNw6eM')
                </script>
            </Helmet>
            <form >
                <div class="form-group">
                    <label for="from_name">Nombre y Apellido</label>
                    <input type="text" class="form-control" id="from_name" aria-describedby="emailHelp" placeholder="nombre y apellido" />
                </div>
                <div class="form-group">
                    <label for="email_id">E-mail Contacto</label>
                    <input type="email" class="form-control" id="email_id" placeholder="email" />
                </div>
                <div class="form-group">
                    <label class="form-check-label" for="message" >Mensaje</label>
                    <textarea id='acercaDe'
                        name='acercaDe' class="form-control" rows="3"
                    ></textarea>
                </div>
                <input type="submit" id="button" value="Enviar Formulario" />
            </form>
            <body>
                <script src="./js/app.js"></script>
            </body>
        </section>



    )
}


export default EnviarForm;