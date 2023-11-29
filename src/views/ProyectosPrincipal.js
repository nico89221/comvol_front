import React, { useState } from 'react';
import Tarjeta from '../components/Tarjeta';
import CarruselProyecto from '../components/CarruselProyecto';
import Carousel from 'react-bootstrap/Carousel';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from "react-helmet"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function ProyectosPrincipal() {

    const [listProyectos, setListProyecto] = useState([]);

    if (listProyectos.length == 0) {

        fetch("https://api-production-db96.up.railway.app/proyecto/filtrar?id_categoria&id_estado=1&id_estado=2&id_rol&pagina=0&cantidad=3")
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setListProyecto([
                    ...data.content,
                ])

            })


    }

    let suscribir = () => {

        window.location = '/suscribirse';

    }

    let contenido;
    if (listProyectos == null) {
        return contenido = <p>cargando</p>;
    }
    else {
        return contenido =

            <div>
                <div class="banner-principal" style={{ width: "1200px", height: "550px" }}>
                    <img class="card-img-top2" src="./img/sociedad.jpg" alt="Card image cap" style={{ width: "1200px", height: "512px" }}></img>
                    <div class="contenedor-comvol">
                        <h2 class="card-title"><b>Convertí tus ideas en realidad.</b></h2>
                        <h3 class="card-title2">Elegí un proyecto y participa del mismo.</h3>
                        <a href="/registrarse" class="btn btn-primary" style={{ marginTop: "50px", fontSize: "24px" }}>Comienza ahora</a>
                    </div>
                </div>
                <section className="principal">
                    



                    <section class="container about">
                        <h2 class="subtitle"><b>¿Qué encontraras en COMVOL?</b></h2>
                        <p class="about__paragraph"> Una red de búsqueda, donde las personas podrán concretar ideas difíciles de desarrollar, para comenzar a realizarlo los
                            usuarios deberán registrarse y crear un proyecto sin costo adicional, solicitando recursos requeridos que englobara desde un personal a un socio inversor.
                            El Objetivo principal es que ese recurso ayude a las personas adquirir experiencias laborales como también que esas
                            ideas se conviertan en realidad.
                            A su vez COMVOL les permitirá a grandes empresas tener la posibilidad de publicar puestos de trabajos y acceder a nuestro espacio de reclutamiento exclusivo llevado a cabo por el equipo de nuestros profesionales.

                        </p>


                    </section>

                    <h3 class="subtitle">Algunos Proyectos en línea</h3>
                    {
                        listProyectos.map((row, i) => {
                            return <Tarjeta {...row} key={i} />
                        })
                    }

                    <section class="knowledge">
                        <div class="knowledge__container container">
                            <div class="knowledege__texts">
                                <h2 class="subtitle">Te invitamos a conocer nuestra propuesta de reclutamiento y selección a medida</h2>
                                <p class="knowledge__paragraph">Somos especialistas en RRHH y trabajamos bajo un sistema ágil de gestión que nos permite brindar resultados con celeridad y profesionalismo, trabajando en equipo bajo una propuesta a medida, para cada organización.</p>
                                <p class="knowledge__paragraph">¿Tenés una búsqueda actualmente y estás indeciso en cómo gestionar el proceso? </p>

                                <a href="./recruiting" class="cta">Contáctanos</a>
                            </div>

                            <figure class="knowledge__picture">
                                <img src="./img/rrhh.jpg" class="knowledge__img" />
                            </figure>
                        </div>
                    </section>

                    <h2 class="subtitle">Suscribite y súmate a la comunidad COMVOL </h2>
                    <section class="questions container">
                        <button class='btn-sus-principal' data-hover="Suscribite" onClick={suscribir}><div>¿Que esperas?</div></button>
                    </section>

                    <Carousel style={{ width: "1100px", height: "400px" }}>
                        <Carousel.Item >
                            <img src="./img/fondobanner.webp" id="before" />
                            <Carousel.Caption>
                                <h2 class="subtitle">Mi nombre es Eliana Pérez Rodriguez,
                                    <span class="testimony__course">Programadora.</span></h2>
                                <div class="banner-entero">
                                    <div class="banner-mitad">
                                        <p class="testimony__review">Siempre me gustaron los videos juegos y encontré en COMVOL la posibilidad de unirme a un proyecto
                                            de un video juego y logramos terminarlo, actualmente se encuentra en Play Store, esta experiencia fue única ya que tengo
                                            un ingreso por descarga y a su vez logre una experiencia única e irrepetible.
                                        </p>
                                    </div>
                                    <div class="banner-mitad">
                                        <figure class="testimony__picture">
                                            <img src="./img/face.jpg" class="testimony__img" />
                                        </figure>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./img/fondobanner.webp" id="before" />

                            <Carousel.Caption>
                                <h2 class="subtitle">Mi nombre es Lucas Gutierre,
                                    <span class="testimony__course">estudiante
                                        de economía.</span></h2>
                                <div class="banner-entero">
                                    <div class="banner-mitad">
                                        <p class="testimony__review">Logre en esta página la posibilidad de encontrar y ejercer mi primer trabajo como economista, hoy formo parte
                                            de una empresa multinacional, donde aprendo todos los días nuevos desafíos, recomiendo a las personas que formen parte
                                            de esta comunidad, ya que van encontrar
                                            cantidad de propuestas.
                                        </p>
                                    </div>
                                    <div class="banner-mitad">
                                        <figure class="testimony__picture">
                                            <img src="./img/face2.jpg" class="testimony__img" />
                                        </figure>
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    <section>
                            <FloatingWhatsApp
                                phoneNumber="1159385154"
                                accountName="Comvol"
                                allowEsc
                                allowClickAway
                                notification
                                notificationSound
                                avatar='./img/logo2.png'
                                chatMessage='Hola, ¿En que te podemos ayudar?'
                            />


                    </section>



                    <section class="questions container">
                        <h2 class="subtitle">Antes de registrarte por favor selecciona la opción correspondiente, podrás visualizar una breve descripción sobre el
                            uso de la herramienta COMVOL</h2>


                        <section class="questions__container">
                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ fontSize: "23px" }}>
                                            <b>¿SOS EMPRESA?</b>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Registra el nombre de tu empresa en el formulario de alta, una vez ingresado podrás visualizar/buscar todos los
                                            proyectos en línea, tendrás la posibilidad de publicar propuestas laborales GRATIS como también podrás proponer a cualquier usuario
                                            conectado a la red unirse a esa propuesta laboral.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo" >
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ fontSize: "23px" }}>
                                            <b>¿SOS UNA PERSONA?</b>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Regístrate con nombre y apellido en el formulario de alta, una vez ingresado podrás visualizar/buscar y postularte a
                                            todos los proyectos en línea, tendrás la posibilidad de publicar GRATIS aquellas ideas que no puedas concretar por falta
                                            de recurso sea humano o inversionista. Los usuarios podrán solicitar unirte a tu proyecto, recluta el personal indicado
                                            y comienza a trabajar en tu idea.</div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ fontSize: "23px" }}>
                                            <b>¿BUSCAS UN RECLUTAMIENTO?</b>
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Regístrate como empresa, una vez ingresado, completa el formulario de Recruiting. Un especialista se contactará y te
                                            ayudará a encontrar el talento que buscas para que puedas enfocarte en lo importante, el crecimiento de tu empresa sin importar donde estés..</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="questions__offer">
                            <h2 class="subtitle">¿Estás listo para unirte a nuestra comunidad?</h2>

                            <a href="/registrarse" class="cta">Regístrate ahora</a>
                        </section>
                    </section>


                </section>

            </div >




    }


}

export default ProyectosPrincipal;

