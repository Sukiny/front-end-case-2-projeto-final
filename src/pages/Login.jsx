import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import CmsApi from '../api/CmsApi'
import { toast } from 'react-toastify';

function Login() {

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const email = form.elements.Email.value
        const senha = form.elements.Senha.value

        const retorno = await CmsApi().login(email, senha)
        if (!retorno.ok) {
            toast.error('Não foi possível realizar o login')
            return
        }

        const dados = await retorno.json()
        localStorage.setItem('token', dados.token)
        window.location.href = '/admin/funcionalidades'
    }



    return (
        <Container className='conteudo-margin p-5'>
            <div id="login-card" className="card">
                <div className="card-body">
                    <h2 className="text-center">Login</h2>
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="Email" >
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" className="form-control form1" name="email" />
                        </Form.Group>

                        <Form.Group controlId="Senha" >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" className="form-control form1" name="pswd"/>
                        </Form.Group >
                        <br />
                        <Button variant="primary" id="button" className="btn btn-primary deep-purple btn-block " type="submit">
                            Realizar Login
                        </Button>
                        <br />
                        <br />
                    </Form >
                </div>
            </div>

        </Container>





    )
}


export default Login