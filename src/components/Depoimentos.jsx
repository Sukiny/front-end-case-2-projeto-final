import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import { Card } from 'react-bootstrap';
import foto01 from '../../public/depoimento01.png'
import foto02 from '../../public/depoimento02.png'

function Depoimentos() {
    return (
        <>

            <Container className="mt-3 p-3 sm "style={{height:"80%"}}  >
                <Row className=" d-flex justify-content-center">
                    <Col className="col-md-11">
                        <div className="text-center mb-4 pb-2">
                            <i className=" fa-quote-left fa-3x text-dark">Depoimentos</i>
                        </div>

                      
                            <div className=" px-3 py-2">

                                <Carousel interval="5000" indicators={false} >
                                    <Carousel.Item>
                                        <Row className="= d-flexDepo justify-content-center">
                                            <Col className="col-xl-8 d-flex justify-content-center">
                                                <Row>
                                                    <div className="col-lg-4 d-flex justify-content-end">
                                                        <img src={foto01}
                                                            className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" style={{ width: "150px", height: "150px", backgroundColor: "#fff" }}></img>
                                                    </div>
                                                    <Carousel.Caption class="col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0 col-9E">
                                                        <h4 >Karen L Moraes - Designer UX/UI </h4>
                                                        <i>
                                                        Como uma designer UX/UI apaixonada por soluções criativas, fiquei simplesmente encantada com o aplicativo Class Notes! A interface simples e intuitiva me conquistou desde o primeiro momento, e a funcionalidade do quadro de notas transformou completamente a forma como organizo minhas ideias e projetos. Adicionar imagens e arquivos às minhas notas foi incrivelmente fácil e eficiente, e a sincronização automática garantiu que eu nunca perdesse minhas notas importantes novamente. Além disso, a possibilidade de compartilhar minhas notas com colegas de trabalho em tempo real me deixou impressionada! A colaboração se tornou muito mais fácil e produtiva. O Class Notes é, sem dúvida, um aplicativo essencial para qualquer designer ou profissional que precise organizar ideias e projetos com facilidade e eficiência. Estou verdadeiramente apaixonada por este aplicativo!
                                                        </i>
                                                    </Carousel.Caption>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Row className=" d-flex justify-content-center ">
                                            <Col className="col-xl-8 d-flex justify-content-end">
                                                <Row>
                                                    <div className="col-lg-4 d-flex justify-content-end">
                                                        <img src={foto02}
                                                            className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" style={{ width: "150px", height: "150px", backgroundColor: "#fff" }}></img>
                                                    </div>
                                                    <Carousel.Caption class=" col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0 col-9E">
                                                        <h4>Beatriz Fidelis - Nutricionista</h4>
                                                        <i>
                                                        Como nutricionista, eu sempre procuro maneiras de me manter organizada e produtiva, e o Class Notes tem sido uma ferramenta incrível para isso. Com a funcionalidade do quadro de notas, eu posso organizar minhas ideias de forma visual e intuitiva, destacando informações importantes com cores e realces. Além disso, a funcionalidade de lembretes e alarmes me ajudou a nunca perder um compromisso ou tarefa importante novamente. Adicionar imagens e arquivos às minhas notas foi simples e eficiente, e a sincronização automática garantiu que eu sempre tivesse acesso às minhas notas atualizadas em todos os meus dispositivos. O Class Notes é um aplicativo essencial para qualquer profissional que precise manter-se organizado e produtivo, e eu recomendo sem hesitação!
                                                        </i>
                                                    </Carousel.Caption>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Carousel.Item><Carousel.Item>
                                        <Row className=" d-flex justify-content-center ">
                                            <Col className="col-xl-8 d-flex justify-content-end">
                                                <Row>
                                                    <div className="col-lg-4 d-flex justify-content-end">
                                                        <img src={foto02}
                                                            className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" style={{ width: "150px", height: "150px", backgroundColor: "#fff" }}></img>
                                                    </div>
                                                    <Carousel.Caption class=" col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0 col-9E">
                                                        <h4>Beatriz Fidelis - Nutricionista</h4>
                                                        <i>
                                                        Como nutricionista, eu sempre procuro maneiras de me manter organizada e produtiva, e o Class Notes tem sido uma ferramenta incrível para isso. Com a funcionalidade do quadro de notas, eu posso organizar minhas ideias de forma visual e intuitiva, destacando informações importantes com cores e realces. Além disso, a funcionalidade de lembretes e alarmes me ajudou a nunca perder um compromisso ou tarefa importante novamente. Adicionar imagens e arquivos às minhas notas foi simples e eficiente, e a sincronização automática garantiu que eu sempre tivesse acesso às minhas notas atualizadas em todos os meus dispositivos. O Class Notes é um aplicativo essencial para qualquer profissional que precise manter-se organizado e produtivo, e eu recomendo sem hesitação!
                                                        </i>
                                                    </Carousel.Caption>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Carousel.Item>
                                    
                                </Carousel>
                            </div>
                    </Col>
                </Row>
            </Container>


        </>
    )
}

export default Depoimentos