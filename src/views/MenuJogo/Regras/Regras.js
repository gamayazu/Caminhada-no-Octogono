import React, {Component} from 'react';
import {Card, CardBody, Row, Col} from "reactstrap";

class Regras extends Component {
    render() {
        return (
            <div>
                <h2 className={"texto"}>Regras</h2>

                <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}
                      className="ml-5 mr-5 mt-5 mb-5">
                    <CardBody>
                        <ul className="a">
                            <li>
                                Cada Aluno ou Grupo vai ser representado por um dos pinos.
                            </li>
                            <img src={"./imagens/regras/pinos.jpg"} className="my-3" alt="Pinos"/>
                            <br/>
                            <li>Antes de começar a partida é necessário que todos tenham folhas de rascunho e lápis para
                                participar do jogo.
                            </li>
                            <br/>
                            <Row>
                                <Col>
                                    <img className="imgregras" src={"./imagens/regras/movimentação.png"}
                                         alt="Ultima Casa"/>
                                </Col>
                                <Col>
                                    <li>Cada Aluno ou Grupo vai rolar os dados e avançar algumas casas. Ao lado, a seta
                                        vermelha demonstra o avanço ao jogar os dados.
                                    </li>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <img className="imgregras" src={"./imagens/regras/quiz.jpg"} alt="Ultima Casa"/>
                                </Col>
                                <Col>
                                    <li>Ao cair em casas Verdes, Amarelas ou Vermelhas os jogadores terão
                                        que responder uma questão de múltipla escolha.
                                        O grupo terá um tempo disponível para responder de acordo com a dificuldade da
                                        pergunta.
                                        Casas verdes: 45 segundos, amarelas: 75 segundos e vermelhas: 160 segundos.
                                    </li>
                                </Col>
                            </Row>
                            <br/>
                            <li>Vence o jogo quem primeiro alcançar o octógono que está localizado na última casa,
                                a 37.
                            </li>
                            <img src={"./imagens/regras/casa_final.jpg"} className="mt-3" alt="Ultima Casa"/>
                        </ul>
                    </CardBody>
                </Card>
                <div className={"footer mt-5 mb-5"}>
                    <img className="button-img mx-3" src={"./imagens/botoes/botao_voltar.png"}
                         alt={"voltar"}
                         onClick={() => {
                             this.props.onSelecionarModoMenu("");
                         }}/>
                </div>
            </div>
        );
    }
}

export default Regras;