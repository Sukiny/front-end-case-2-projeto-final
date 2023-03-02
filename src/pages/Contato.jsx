import { Container, Button, Form, Alert } from 'react-bootstrap'
import Depoimentos from '../components/Depoimentos'

import { toast } from 'react-toastify';


function Contato() {

 
    const notify = () => toast(<CustomToast/>);

    const handleSubmit = (event) => {
        event.preventDefault()
           

      toast('🦄 ok!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",  });
       
        event.target.reset()
    }

    return (
        <>
            <Container className="p5" >
                <div id="login-card" class="card">
                    <div class="card-body">
                        <h2 class="text-center">Contato</h2>
                        <p class="text-center" >Entre em contato conosco</p>
                        <br />
                        <Form onSubmit={handleSubmit}>

                            <Form.Group controlId="Nome">
                                <Form.Label >Nome</Form.Label>
                                <Form.Control type="text" id="email" placeholder="Digite seu nome completo" />
                            </Form.Group>

                            <Form.Group controlId="Email" >
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Digite seu e-mail" class="form-control" id="email" name="email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Mensagem">
                                <Form.Label>Mensagem</Form.Label>
                                <Form.Control id="email" as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="primary" id="button" class="btn btn-primary deep-purple btn-block " type="submit">
                                Enviar contato
                            </Button>
                            <br />
                            <br />
                        </Form >
                    </div>
                </div>
            </Container>
        </>

    )
}


export default Contato