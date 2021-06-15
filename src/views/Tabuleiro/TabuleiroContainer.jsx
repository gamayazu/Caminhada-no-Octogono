import React, {Component, Fragment} from 'react';
import Tabuleiro from "./Tabuleiro";
import ModalFimDeJogo from "./ModalFimDeJogo";

const vitoria = new Audio("./sons/mixkit-animated-small-group-applause-523.wav");

class TabuleiroContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        }
    }

    toggle = () => {
        if (this.state.isOpen === true) {
            this.props.reiniciarJogo();
        }

        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    componentDidUpdate(prevProps) {
        if (prevProps.fimDeJogo !== this.props.fimDeJogo) {
            vitoria.play();
            this.toggle();
        }
    }

    render() {
        return (
            <Fragment>
                <ModalFimDeJogo
                    grupoVencedor={this.props.grupoVencedor}
                    toggle={this.toggle}
                    isOpen={this.state.isOpen}
                />
                <Tabuleiro
                    grupoJogadores={this.props.grupoJogadores}
                    moverPeao={this.props.moverPeao}
                    turnoAtualGrupo={this.props.turnoAtualGrupo}
                    desabilitarDado={this.props.desabilitarDado}
                />
            </Fragment>
        );
    }
}

export default TabuleiroContainer;