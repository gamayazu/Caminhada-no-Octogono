import React, {Component, Fragment} from 'react';
import {Progress} from 'reactstrap';

class Timer extends Component {
    render() {
        let valor = ((this.props.tempoRestante * 100) / this.props.tempoTotal).toFixed(1);
        let cor = "";

        if (valor > 50) {
            cor = "success";
        } else if (valor <= 50 && valor >= 30) {
            cor = "warning";
        } else {
            cor = "danger";
        }

        return (
            <Fragment>
                <Progress color={cor} value={valor}/>
                <h5>{this.props.tempoRestante}</h5>
            </Fragment>

        );
    }
}

export default Timer;