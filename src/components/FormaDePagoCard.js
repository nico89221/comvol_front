import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import { Container, Row, Col, Card } from 'react-bootstrap'



export default function FormaDePagoCard() {

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );

let suscripcion = async() => {
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
    await delay(2000);
    window.location = '/';
}
    return (
        <Container className='mt-5'>
            <Row>
                <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
                    <Card body>

                        <img src='http://localhost:3000/img/tarjeta.png' alt="project-image" class="img-tarjeta"></img>
                        <Form>
                            <Form.Group control="email" className='label-inicio'>
                                <Form.Label>Numero de Tarjeta </Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                />
                                <Form.Control.Feedback type='invalid'>
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group control="nombre" className='label-inicio'>
                                <Form.Label>Nombre del titular : </Form.Label>
                                <Form.Control
                                    type='text'
                                />
                            </Form.Group>
                            <Form.Group control="nombre" className='label-inicio'>
                                <Form.Label>CCV : </Form.Label>
                                <Form.Control
                                    type='text'
                                    className="w-25"
                                />
                            </Form.Group>
                            <label for="exampleFormControlSelect1">Tipo de suscripcion</label>
                            <div class="sub-fecha-tarjeta">
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Suscripcion standart: $1000/mes</option>
                                    <option>Suscripcion premiun: $2000/mes</option>
                                </select>
                            </div>
                            <label for="exampleFormControlSelect1" className='fecha-caducidad-label'>Fecha de caducidad</label>
                            <Form.Group control="email" className='fecha-tarjeta'>
                                <div class="sub-fecha-tarjeta">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>2028</option>
                                        <option>2027</option>
                                        <option>2026</option>
                                        <option>2025</option>
                                        <option>2024</option>
                                    </select>
                                </div>
                                <div class="sub-fecha-tarjeta">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                    </select>
                                </div>
                            </Form.Group>
                            <div className='btn-tarjeta-wrap' >
                                <a onClick={suscripcion} variant='primary' type='submit' className='btn-tarjeta'>Pagar</a>
                            </div>
                            <ToastContainer />
                        </Form>
                        <div className='mt-4'>
                            <ToastContainer />
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}
