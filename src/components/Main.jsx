import { Container } from "react-bootstrap"
import foto from '../../public/img01.png'

import CookieConsent from "react-cookie-consent";

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
                            <a
                                target="_blank" href="https://classnotesapp.netlify.app/"
                                className="main-btn border-btn btn-hover wow fadeInUp"
                                data-wow-delay=".6s"
                            >Acessar</a>
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
        <CookieConsent 
        location="bottom"
        buttonText="ok"
        cookieName="CookieName"
        style={{ background: "#000" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      >
        Nós utilizamos cookies para melhorar a sua experiência no site. 
        Ao continuar navegando, você concorda com a nossa política de privacidade <small>
            <a className="text-warning" href="#">Saiba Mais</a></small>.  
      </CookieConsent>
    </Container>
    )
    
}

export default Main