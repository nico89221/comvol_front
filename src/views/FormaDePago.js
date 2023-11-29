import { Container, Row, Col, Card } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormaDePagoCard from '../components/FormaDePagoCard';


export default function FormaDePago() {

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm="12" md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }}>
          <Card body>

            <img src='https://main--stellar-bublanina-20e9ef.netlify.app//img/tarjeta.png' alt="project-image" class="img-tarjeta"></img>
            <FormaDePagoCard></FormaDePagoCard>
            <div className='mt-4'>
              <ToastContainer />
            </div>
          </Card>
        </Col>                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      </Row>
    </Container>

  )
}                                            

