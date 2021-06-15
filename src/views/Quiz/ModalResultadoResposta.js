import React, {Component, Fragment} from 'react';
import {Modal, Card, CardBody, CardFooter, CardHeader} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown, faLaughBeam} from "@fortawesome/free-solid-svg-icons";

class ModalResultadoResposta extends Component {
    render() {
        let acerto = this.props.acerto === true;

        return (
            <Modal toggle={this.props.toggle} isOpen={this.props.isOpen}
                   backdrop="static"
                   keyboard={false}
                   size="md"
                   style={{marginTop: 200}}>
                <Card style={{borderColor: acerto ? "green" : "red", borderWidth: 2}} className="text-center">
                    <CardHeader>
                        <h3>Grupo {this.props.grupoAtual.numero}</h3>
                    </CardHeader>
                    <CardBody>
                        <Fragment>
                            <FontAwesomeIcon icon={acerto ? faLaughBeam : faFrown}
                                             size={"4x"}
                                             className={`${acerto ? "text-success" : "text-danger"} mb-3`}/>
                            <h4>
                                {acerto ? "Resposta correta!" : "Resposta incorreta!"}
                            </h4>
                        </Fragment>
                    </CardBody>
                    <CardFooter>
                        <h2 style={{textAlign: "center"}}>{acerto ?
                            `Avance ${this.props.qtdCasas} Casa(s).` :
                            `Volte ${this.props.qtdCasas} Casa(s).`}</h2>
                    </CardFooter>
                </Card>
            </Modal>
        );
    }
}

export default ModalResultadoResposta;