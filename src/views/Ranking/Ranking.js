import React, {Component} from 'react';
import {Row, Card, CardBody} from "reactstrap";

class Ranking extends Component {
    render() {
        let ranking = this.props.grupoRanqueado.map((grupo, i) => {
            return (
                <Row key={i} className="justify-content-center mb-2">
                        <h5 className="mt-3">Casa {grupo.casaAtual}</h5>
                    <img
                        style={{width: 40, height: 40}}
                        src={grupo.caminhoPeao}
                        alt={grupo.numero}
                        className="ml-3"
                    />
                </Row>
            )
        });

        return (
            <Card style={{borderColor: "grey", borderWidth: 2}}>
                <CardBody>
                    <h3 className="mb-3 mt-2">Ranking</h3>
                    {ranking}
                </CardBody>
            </Card>
        );
    }
}

export default Ranking;