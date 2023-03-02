import { Container, Form, Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import CmsApi from '../../api/CmsApi'
import { toast } from 'react-toastify';


function AdminSobre() {
    const [sobre, setSobre] = useState([])

    useEffect(() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    function handleTextChange(event) {
        const text = event.target.value
        setSobre({ ...sobre, text })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const form = event.currentTarget
        const text = form.text.value

        const response = await CmsApi().patchSobre({ text })
        if (!response.ok) {
            toast.error('Erro ao atualizar conteúdo da página Sobre')
            return
        }
        toast.success('Conteúdo da página Sobre atualizado com sucesso!')

    }

    return (

        <Container className='conteudo-margin'>
            <div id="login-card" className="card">
                <div className="card-body">
                    <h2 className="text-center">Admin Funcionalidade</h2>
                    <br />
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="text" >
                            <Form.Label>Conteúdo da página Sobre</Form.Label>
                            <Form.Control as="textarea" className="form-control form1" rows={3} value={sobre.text} onChange={handleTextChange} />
                        </Form.Group>
                        <br />
                        <Button variant="primary" id="button" className="btn btn-primary deep-purple btn-block " type="submit">
                            Atualizar o texto
                        </Button>
                        <br />
                        <br />
                    </Form >

                </div>
            </div>
        </Container>


    )
}

export default AdminSobre