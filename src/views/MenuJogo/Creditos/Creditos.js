import React, {Component, Fragment} from 'react';
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Row} from "reactstrap";

class Creditos extends Component {
    render() {
        return (
            <Fragment>
                <h2 className="texto mt-3">Créditos</h2>
                <Row className="mt-5">
                    <Col>
                        <Card body style={{backgroundColor: 'lightgrey', borderColor: '#333'}}
                              className="mx-3 my-3">
                            <CardBody>
                                <CardTitle tag="h5">Gustavo Gomes Pereira</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted mb-4">Criador</CardSubtitle>
                                <Row>
                                    <Col>
                                        <img className="cardimg" src={"./imagens/creditos/gustavoGomes.jpg"}
                                             alt="gustavo"/>
                                    </Col>
                                    <Col>
                                        <CardText>
                                            Desenvolvedor Backend, Cientista da Computação.
                                        </CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card body style={{backgroundColor: 'lightgrey', borderColor: '#333'}}
                              className="mx-3 my-3">
                            <CardBody>
                                <CardTitle tag="h5">Lucas Gama Da Silva</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted mb-4">Criador</CardSubtitle>
                                <Row>
                                    <Col>
                                        <img className="cardimg" src={"./imagens/creditos/lucasGama.jpg"} alt="lucas"/>
                                    </Col>
                                    <Col>
                                        <CardText>
                                            Desenvolvedor Frontend, Cientista da Computação e apaixonado por algoritmos.
                                        </CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <h2>Notas</h2>
                        <br/>
                        <p style={{fontSize:"24px"}}>Este jogo foi desenvolvido como um projeto de TCC com intuito de incentivar a vontade
                            de aprender matemática, deixando a aula mais divertida e dinâmica.</p>
                    </Col>
                </Row>

                <div className="footer my-5">
                    <img className="button-img mx-3" src={"./imagens/botoes/botao_voltar.png"}
                         alt={"voltar"}
                         onClick={() => {
                             this.props.onSelecionarModoMenu("");
                         }}/>
                </div>
            </Fragment>
        );
    }
}

export default Creditos;