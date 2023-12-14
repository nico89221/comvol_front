import React, { useState } from 'react';

function QuienesSomos() {


    return (

        <section>
            <section class="principalquienes">

                <h1 class="tituloquienes"><b>Nuestros comienzos</b></h1>

                <div class="texto_comienzos">

                    <p style={{ fontSize: "16px" }}>Somos una red de búsqueda con un objetivo principal basado en ayudar a las personas a concretar ideas difíciles de desarrollar y a adquirir una primera experiencia laboral.</p>

                    <p style={{ fontSize: "16px" }} > La herramienta surge a mediados del segundo semestre del 2021,  período en el cual Nicolás Miño y Pablo Futterer, ambos estudiantes de la carrera de Analista de Sistemas, escuchaban y entendían la problemática que se presentaba no solo en sus compañeros de cursadas sino que  era una situación que ellos también transitaban, ya que al no tener una experiencia laboral eran excluídos de postulaciones de trabajo.</p>

                    <p style={{ fontSize: "16px" }}>Esta aplicación permite de manera gratuita generar ideas/proyectos de personas que solicitarán el recurso requerido, abarcando desde un personal a un socio inversor, esto dará origen a postulaciones abiertas donde cualquier interesado podrá formar parte del negocio y su participación iniciará el camino hacia una primer experiencia laboral.

                        Nuestra innovación permitirá que el usuario creador de la propuesta pueda aceptar a los participantes postulados pudiéndose contactar con ellos mediante correo electrónico o el uso de la mensajería más utilizada en la actualidad.

                        A su vez ComVol  permitirá a grandes empresas tener la posibilidad de publicar proyectos de empleos, la difusión  mediante la red de personas, selección del personal, como también el acceso a nuestro espacio de reclutamiento exclusivo llevado a cabo por el equipo de nuestros profesionales.</p>

                </div>

                <h2 class="titulovideos" style={{ fontStyle: 'oblique' }}><b>Team</b><img src="https://main--stellar-bublanina-20e9ef.netlify.app//img/logo2.png" class="logo" alt="..." style={{ borderRadius: "18px", width: "70px", height: "70px", marginLeft: "15px" }} /></h2>
                <img src='http://main--stellar-bublanina-20e9ef.netlify.app//img/n.jpg' alt="project-image" class="img-detalle-vista-equipo"></img>
                <img src='https://main--stellar-bublanina-20e9ef.netlify.app//img/pablo.jpg' alt="project-image" class="img-detalle-vista-equipo"></img>

                <h2 class="titulovideos" style={{ paddingBottom: "10px", paddingTop: "10px" }}><b>Nuestra visión</b></h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/o8-NB6JufTc?si=wJHMp6AU0gLGvqGB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </section>
            <section class="questions__container">
                <h2 class="subtitle">Preguntas frecuentes</h2>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ fontSize: "23px" }}>
                                <b>¿El costo para publicar un proyecto es gratis?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Si, el costo es gratis y podés publicar como usuario todos los proyectos que requieras y como empresa todas las postulaciones requeridas para tu organización.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingTwo" >
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ fontSize: "23px" }}>
                                <b>¿La suscripción es paga?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Hoy Comvol posee dos tipos de suscripción: una paga donde el usuario tendrá que abonar todos los meses la cuota mediante mercado pago y una suscripción gratuita que no posee actualización mensual.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ fontSize: "23px" }}>
                                <b>¿El reclutamiento exclusivo tiene costo?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Si, el reclutamiento posee un costo mínimo a diferencia de otras empresas reclutadoras.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" style={{ fontSize: "23px" }}>
                                <b>¿Por cuánto tiempo puedo tener un proyecto en la plataforma?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Podés tener el proyecto el tiempo que sea necesario, sin costo alguno.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive" style={{ fontSize: "23px" }}>
                                <b>¿Puedo contactarme con un usuario?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Si, puedes contactarte vía mail o WhatsApp y para poder hacerlo es necesario que sea aceptado en tu proyecto creado.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix" style={{ fontSize: "23px" }}>
                                <b>¿Cuáles son los requisitos para crear un proyecto?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Ninguno, solamente tenés que registrarte como empresa o usuario y crear el proyecto de tu incumbencia.</div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="flush-headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven" style={{ fontSize: "23px" }}>
                                <b>¿Si soy empresa tengo un costo por tener un perfil diferente a un usuario?</b>
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">No, tanto para las empresas como usuario, la plataforma no requiere costo.</div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );

}

export default QuienesSomos;

