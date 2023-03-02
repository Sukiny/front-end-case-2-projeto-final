import foto1 from "../../public/celular.png"
import foto from '../../public/img01.png'
import Container from 'react-bootstrap/Container'
import CarouselFade from "../components/Carousel"

import { Link } from 'react-router-dom'


function Destaques() {
    return (
        <Container>
            <section className="ftco-section ftco-no-pt ftco-no-pb text-dark" >
                <div className="container-xl">
                    <div className="row g-xl-5">
                        <div className="col-md-7 heading-section d-flex align-items-center aos-init aos-animate" data-aos="fade-up" 
                        data-aos-delay="200" data-aos-duration="1000">
                            <div className="mt-0 my-lg-5 py-5">
                                <h2 className="subheading">Learn Anything</h2>
                                <h2 className="mb-2">Benefits About Online Learning Expertise</h2>
                                <div className="row mt-4 g-lg-2">
                                    <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                                        <div className="services d-flex">
                                            <div className="icon"><span className="flaticon-online-learning"></span></div>
                                            <div className="text">
                                                <h2>Online Courses</h2>
                                                <p className="mb-0">Far far away, behind the word mountains, f
                                                ar from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                                        <div className="services d-flex">
                                            <div className="icon"><span className="flaticon-certificate"></span></div>
                                            <div className="text">
                                                <h2>Earn A Certificates</h2>
                                                <p className="mb-0">Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia, there live the blind texts. lore</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                                        <div className="services d-flex">
                                            <div className="icon"><span className="flaticon-scientist"></span></div>
                                            <div className="text">
                                                <h2>Learn with Expert</h2>
                                                <p className="mb-0">Far far away, behind the word mountains, far from the countries 
                                                Vokalia and Consonantia, there live the blind texts.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex justify-content-center" >
                        <CarouselFade />
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Destaques;