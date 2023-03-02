import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ItemFuncionalidade(item) {


    return (
        <Col sm="12" md="4" key={item.id}>
            <Card.Body id="icon-boxes" className="icon-boxes ">
                <div className="container pt-5">
                    <div className="icon-box ">
                        <div className="icon ">
                            <i className="bx bxl-dribbble"></i>
                        </div>
                        <Card.Title>
                        <h4 className="title">
                            <strong>{item.title}</strong>
                        </h4>
                        </Card.Title>
                        <Card.Text>
                        <p className="description">{item.description}</p>
                       </Card.Text>
                    </div>
                </div>
            </Card.Body>
        </Col>
    );
}

function ListaFuncionalidades(props) {
    return (
        <Row>
            {props.funcionalidades.map(item => ItemFuncionalidade(item))}
        </Row>
    );
}

export default ListaFuncionalidades
