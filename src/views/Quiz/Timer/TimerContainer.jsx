import React, {Component} from 'react';
import Timer from "./Timer";

class TimerContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tempoTotal: this.definirTempoDisponivel(this.props.dificuldade),
            tempoRestante: this.definirTempoDisponivel(this.props.dificuldade),
            timer: null,
        }
    }

    componentDidMount() {
        let timer = setInterval(this.tick, 1000);
        this.setState({timer});
    }

    tick = () => {
        if (this.props.pararTimer === true) {
            clearInterval(this.state.timer);
        }

        if (this.state.tempoRestante > 0) {
            this.setState({tempoRestante: this.state.tempoRestante - 1});
        } else {
            this.props.tempoEsgotado();
            clearInterval(this.state.timer);
        }
    };

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    definirTempoDisponivel = (dificuldade) => {
        switch (dificuldade) {
            case "Fácil":
                return 45; // Tempo em segundos

            case "Normal":
                return 75;

            case "Difícil":
                return 160;
        }
    };

    render() {
        return (
            <Timer
                tempoTotal={this.state.tempoTotal}
                tempoRestante={this.state.tempoRestante}
            />
        );
    }
}

export default TimerContainer;