import React, {Component} from 'react';
import {Button, Card, CardBody, CardHeader, CardTitle, Row, Col} from "reactstrap";
import TimerContainer from "./Timer/TimerContainer";

class Quiz extends Component {
    render() {
        let alternativas = [];

        if (this.props.questaoAtual.hasOwnProperty('opcoes')) {
            alternativas = this.props.questaoAtual.opcoes.map((alternativa, i) => {
                return (
                    <Col md="6" key={i} className="mt-3 mb-5">
                        <h6>{alternativa.valor}</h6>
                        <Button outline={!(this.props.alternativaSelecionada === alternativa.alternativa)}
                                style={{minWidth: 150}}
                                color={this.props.alternativaSelecionada === alternativa.alternativa ? "success" : "secondary"}
                                onClick={() => {
                                    this.props.selecionarAlternativa(alternativa.alternativa)
                                }}>
                            {alternativa.alternativa}
                        </Button>
                    </Col>
                )
            });
        }

        let questaoFormatada = [];
        let titulo = "";

        if (this.props.questaoAtual.titulo !== undefined) {
            questaoFormatada = this.props.questaoAtual.titulo.split("\n");

            titulo = questaoFormatada.map((linha, i) => {
                return <h6 key={i}>{linha} </h6>
            });
        }

        return (
            <Card style={{border: "secondary"}} className="mx-4">
                <CardHeader>
                    <CardTitle>
                        {titulo}
                    </CardTitle>
                </CardHeader>
                <TimerContainer
                    pararTimer={this.props.pararTimer}
                    dificuldade={this.props.dificuldadeQuestao}
                    tempoEsgotado={this.props.tempoEsgotado}
                />
                <CardBody>
                    <Row>
                        {alternativas}
                    </Row>
                </CardBody>
                <Row>
                    <Col>
                        <Button color="success"
                                className="mb-3"
                                onClick={() => {
                                    this.props.responderQuestao()
                                }}>
                            Confirmar Resposta
                        </Button>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default Quiz;