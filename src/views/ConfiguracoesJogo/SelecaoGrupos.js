import React, {Component} from 'react';
import {Container, Row, Col} from "reactstrap";

class SelecaoGrupos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            totalGrupos: 0,
            peoes: ["amarelo", "azul", "verde", "vermelho"]
        }
    }

    onSelecionarPeao = (peao, caminho) => {
        let peoes = this.state.peoes;
        let totalGrupos = this.state.totalGrupos;

        totalGrupos++;

        const index = peoes.indexOf(peao);
        if (index > -1) {
            peoes.splice(index, 1);
        }

        this.setState({peoes, totalGrupos});
        this.props.onAdicionarGrupoJogadores(peao, totalGrupos, caminho);
    };

    renderizarPeoes = (peoes) => {
        let listaPeoes = peoes.map((peao, i) => {
            return (
                <Col key={i}>
                    <img
                        alt={peao}
                        className="selecionarPeao"
                        onClick={() => {
                            this.onSelecionarPeao(peao, `./imagens/peoes/peao_${peao}.png`)
                        }}
                        src={`./imagens/peoes/peao_${peao}.png`}
                    />
                </Col>
            )
        });

        let titulo = <h5>Grupo {this.state.totalGrupos + 1}, escolha seu peão</h5>;

        if (peoes.length === 0) {
            titulo = <h5>Grupos selecionados! Inicie o jogo!</h5>
        }
        return (
            <div>
                {titulo}
                <Row>
                    {listaPeoes}
                </Row>
            </div>
        )
    };

    render() {
        let disabledImg = "";
        if (this.props.disableIniciarSalaDeAula) {
            disabledImg = "disabled-img";
        }
        return (
            <div>
                <h2>{this.props.modoJogo}</h2>
                <Container>
                    <Row>
                        <Col>
                            <h5>Grupos</h5>
                            {this.props.grupoJogadores.map((grupo, i) => {
                                return <div key={i}>
                                    <Container>
                                        <Row>
                                            <Col className="text-right mt-5">
                                                <h6 key={i}>Grupo {grupo.numero}</h6>
                                            </Col>
                                            <Col className="text-left">
                                                <img
                                                    alt={grupo.peao}
                                                    className="selecionarPeao"
                                                    src={grupo.caminhoPeao}
                                                />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>

                            })}
                        </Col>
                        <Col>
                            <Row>
                                {this.renderizarPeoes(this.state.peoes)}
                            </Row>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <img className="button-img mx-3" src={"./imagens/botoes/botao_voltar.png"}
                                 alt={"voltar"}
                                 onClick={() => {
                                     this.props.onSelecionarModoMenu("");
                                     this.props.reiniciarGrupos();
                                 }}/>

                            <img className={`button-img mx-3 ${disabledImg}`} src={"./imagens/botoes/botao_iniciar.png"}
                                 alt={"iniciar"}
                                 onClick={() => {
                                     if (this.props.disableIniciarSalaDeAula === false) {
                                         this.props.onIniciarJogo()
                                     }
                                 }}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SelecaoGrupos;