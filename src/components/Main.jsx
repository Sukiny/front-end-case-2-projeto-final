import { Container } from "react-bootstrap"
import foto from '../../public/img01.png'
import { Link } from "react-router-dom"

function Main() {
    return (
        <Container className='conteudo-margin '   >
        <section id="home" className="hero-section"  >
            <div className="container">
                <div className="row align-items-center position-relative">
                    <div className="col-lg-5  ">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp ">
                            Maximize sua produtividade 
                            </h1>
                            <p className="wow fadeInUp text-dark animate__flash" >
                            Organize suas ideias e aprenda de forma eficiente com o nosso aplicativo gratuito de notas!
                            </p>
                            <Link
                                href="javascript:void(0)"
                                className="main-btn border-btn btn-hover wow fadeInUp"
                                data-wow-delay=".6s"
                            >Acessar</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div className="hero-img wow fadeInUp">
                            <img src={foto} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Container>
    )
    
}

export default Main