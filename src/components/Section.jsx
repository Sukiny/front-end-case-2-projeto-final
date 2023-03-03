import Container from 'react-bootstrap/Container'
import CarouselFade from "../components/Carousel"

import { Link } from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel';
import foto1 from "../../public/celular.png"
import foto2 from "../../public/celular02.png"
import foto3 from '../../public/celular03.png'

import { useState, useEffect } from 'react';
import CmsApi from '../api/CmsApi'



const Section = () => {

    const [sobre, setSobre] = useState([])


    const [funcionalidades, setFuncionalidades] = useState([])
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
                <section id="home" className=""  >
                    <Container >
                        <div className="row align-items-center position-relative">
                            <CarouselFade />
                            <div className="col-lg-6">
                                <div className="hero-content " >
                                    <h1 className="mb-5" >
                                        Sobre o App
                                    </h1>
                                    <p className="p text-dark">
                                      {sobre.text}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </Container >
                </section>
            </Container>
        </>
    )

}
export default Section