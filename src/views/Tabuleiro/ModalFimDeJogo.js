import React, {Component, Fragment} from 'react';
import {Card, CardBody, CardFooter, CardHeader, Modal} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandRock, faLaughBeam} from "@fortawesome/free-solid-svg-icons";

class ModalFimDeJogo extends Component {
    render() {
        return (
            <Modal toggle={this.props.toggle} isOpen={this.props.isOpen}
                   size="md"
                   style={{marginTop: 200}}>
                <Card style={{borderColor: "blue", borderWidth: 2}} className="text-center">
                    <CardHeader>
                        <h3>Vitória!</h3>
                    </CardHeader>
                    <CardBody className="my-5">
                        <Fragment>
                            <FontAwesomeIcon icon={faHandRock}
                                             size={"3x"}
                                             className="text-success mb-3 mr-2"/>
                            <FontAwesomeIcon icon={faLaughBeam}
                                             size={"4x"}
                                             className="text-success mb-3"/>
                            <h4>
                                Parabéns Grupo {this.props.grupoVencedor}, vocês venceram!
                            </h4>
                        </Fragment>
                    </CardBody>
                    <CardFooter/>
                </Card>
            </Modal>
        );
    }
}

export default ModalFimDeJogo;