import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import foto02 from '../../public/img02.png'
import { Row, Col } from 'react-bootstrap'

import CmsApi from '../api/CmsApi'


function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect(() => {
         async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])


    return (
        <>
            <Container className='conteudo-margin '   >
                <section id="home" className="hero-section "  >
                    <Container >
                        <div className="row align-items-center position-relative">
                            <div className="col-lg-5">
                                <div className="hero-content sectionAbout p-4 rounded">
                                    <h1 className="">
                                        Sobre o nosso Aplicativo
                                    </h1>
                                    <p className=" text-dark">
                                     {sobre.text}
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                                    <img src={foto02} alt="" />
                                    <small><a href="https://br.freepik.com/fotos-gratis/tecnologia-juvenil-e-conceito-de-primavera-mulher-jovem-e-alegre-de-oculos-jaqueta-jeans-rindo-e-sorrindo-olhando-a-tela-do-celular-enviar-mensagens-de-texto-engracadas-como-em-pe-na-rua_24705959.htm#query=estudos%20app&position=13&from_view=search&track=ais">Imagem de lookstudio
                                    </a> no Freepik</small>

                                </div>
                            </div>
                        </div>
                    </Container >
                </section>
            </Container>

            <Depoimentos />
        </>
    )


}
export default Sobre