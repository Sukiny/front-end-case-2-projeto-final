import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import logo from '../../public/logo04.svg'

function Header() {

    return (<Navbar collapseOnSelect expand="lg" variant='dark'
        style={{ backgroundColor: "#23635D"}} fixed="top">
        <Container className='d-flex justfy-content-aroud'>
            <LinkContainer to="/">
                <Navbar.Brand>       
                        <div>
                        <img src={logo} className=""  alt="" style={{objectFit: "contain", height:"125px", }} />
                        </div>
                </Navbar.Brand>
                
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
            <Navbar.Collapse id="responsive-navbar-nav"        
                style={{ backgroundColor: "#23635D"  }} >
                <Nav className="me-auto" fixed="top"  style={{  width: "30px",fontSize:"23px"  }}  >
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sobre">
                        <Nav.Link>Sobre</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/funcionalidades">
                        <Nav.Link>Funcionalidades</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>Contato</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Header;

