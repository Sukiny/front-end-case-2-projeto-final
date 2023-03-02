import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap'

const Section2 = () => {

    return (

        <>

            <section id="icon-boxes " className="icon-boxes "><div class="container pt-5">
                <div className="row ">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 " data-aos="fade-up">
                        <div className="icon-box  "><div className="icon ">
                            <i className="bx bxl-dribbble"></i>
                        </div><h4 className="title">
                                <a href="">Quadro de notas</a></h4>
                            <p className="description">Com o quadro de notas, você pode criar anotações em um formato visual e intuitivo, tornando mais fácil organizar informações, ideias e pensamentos.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon-box"><div className="icon"><i className="bx bx-file"></i>
                        </div><h4 className="title">
                                <a href="">Sincronização automática</a></h4>
                            <p className="description">As notas criadas no Class Notes são automaticamente sincronizadas em todos os seus dispositivos, permitindo que você acesse suas anotações de qualquer lugar e a qualquer momento.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i>
                            </div><h4 className="title"><a href="">Compartilhamento de notas</a>
                            </h4><p className="description">Compartilhe suas anotações com colegas de classe, colaboradores ou amigos, tornando o trabalho em equipe e a aprendizagem mais fáceis e produtivos.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-layer"></i>
                            </div><h4 className="title"><a href="">Adição de links e arquivos</a>
                            </h4><p className="description">Adicione links, arquivos e outros tipos de mídia às suas notas, tornando-as mais ricas e completas. Essa funcionalidade é especialmente útil para estudantes, pesquisadores e profissionais que precisam organizar informações de diferentes fontes.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
export default Section2

