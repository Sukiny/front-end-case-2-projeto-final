import Container from 'react-bootstrap/Container'
import Destaques from '../components/Destaques'
import Depoimentos from '../components/Depoimentos'
import Main from '../components/Main'
import Section from "../components/Section";
import Section2 from "../components/Section2";


import { useState,useEffect } from 'react';
import CmsApi from '../api/CmsApi'


function Home() {



    return (


        <>
            <Main />
            <Container>
                <Section/>
                <Section2 />
                <Depoimentos/>
            </Container>
        </>
    );
}

export default Home;