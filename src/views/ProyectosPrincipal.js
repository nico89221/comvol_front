import React, { useState } from 'react';
import Tarjeta from '../components/Tarjeta';
import CarruselProyecto from '../components/CarruselProyecto';
import Carousel from 'react-bootstrap/Carousel';

function ProyectosPrincipal() {

    const [listProyectos, setListProyecto] = useState([]);

    if (listProyectos.length == 0) {

        fetch("https://apicomvolbackend-production.up.railway.app/proyecto/filtrar?id_categoria&id_estado=1&id_estado=2")
            .then(response => response.json())
            .then(function (data) {

                console.log("La data es: " + data.content)
                setListProyecto([
                    ...data.content,
                ])

            })


    }

    let contenido;
    if (listProyectos == null) {
        return contenido = <p>cargando</p>;
    }
    else {
        return contenido =

            <section className="principal">
                <Carousel >
                <Carousel.Item>
                    <img src='https://main--stellar-bublanina-20e9ef.netlify.app/img/banner2.jpg' alt="project-image" class="img-banner"></img>
                    <Carousel.Caption>
                        <h3>Conoce a nuestros Partners principales</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://main--stellar-bublanina-20e9ef.netlify.app/img/banner.jpg' alt="project-image" class="img-banner"></img>

                    <Carousel.Caption>
                        <h3>Conoce a nuestros Partners principales</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='https://main--stellar-bublanina-20e9ef.netlify.app/img/banner.jpg' alt="project-image" class="img-banner"></img>

                    <Carousel.Caption>
                    <h3>Conoce a nuestros Partners principales</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


                <h2 className='titulo'><b>Proyectos en linea</b></h2>
                {
                    listProyectos.map((row, i) => {
                        return <Tarjeta {...row} key={i} />
                    })
                }

            </section>


    }


}

export default ProyectosPrincipal;

