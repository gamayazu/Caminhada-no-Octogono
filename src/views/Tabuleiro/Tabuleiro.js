import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "reactstrap";
import Dice from 'react-dice-roll';
import RankingContainer from "../Ranking/RankingContainer";

const casasTabuleiro = require("../../utils/casasTabuleiro").casasTabuleiro;

class Tabuleiro extends Component {
    render() {
        let octogonos = casasTabuleiro.map((octogono, i) => {
            return (
                <Fragment key={i}>
                    <img
                        alt={octogono.numeroCasa}
                        style={{
                            gridRow: octogono.linha,
                            gridColumn: octogono.coluna,
                            maxWidth: "100%",
                            height: "auto"
                        }}
                        src={`./imagens/casas/${octogono.corCasa}.png`}
                    />
                    <h5 style={{
                        gridRow: octogono.linha,
                        gridColumn: octogono.coluna,
                        fontSize: "1.2em"
                    }}
                        className="numeros-casas">{i + 1}</h5>
                </Fragment>
            )
        });

        let jogadores = this.props.grupoJogadores.map((grupo, i) => {
            return (
                <div style={{gridRow: grupo.posicaoTabuleiro.linha, gridColumn: grupo.posicaoTabuleiro.coluna}}
                     key={i}>
                    <img alt={grupo.numero}
                         className="jogador"
                         src={grupo.caminhoPeao}
                    />
                </div>
            )
        });

        return (
            <div>
                <Container>
                    <Row>
                        <Col md="8" className="background-tabuleiro">
                            <div className="tabuleiro-jogo">
                                {octogonos}
                                {jogadores}
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="justify-content-center mb-5">
                                <h3>Grupo {this.props.turnoAtualGrupo}, role o dado</h3>
                                <div className="mt-5">
                                    <Dice
                                        onRoll={(value) => this.props.moverPeao(this.props.grupoJogadores[this.props.turnoAtualGrupo - 1], value, "Sala de Aula", null, "Avançar")}
                                        sound={"https://soundbible.com/mp3/Shake%20And%20Roll%20Dice-SoundBible.com-591494296.mp3"}
                                        size={80}
                                        disabled={this.props.desabilitarDado}
                                    />
                                </div>
                            </div>
                            <RankingContainer
                                grupoJogadores={this.props.grupoJogadores}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Tabuleiro;