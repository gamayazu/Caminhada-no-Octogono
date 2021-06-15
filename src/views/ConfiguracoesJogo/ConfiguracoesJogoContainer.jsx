import React, {Component} from 'react';
import ConfiguracoesJogo from "./ConfiguracoesJogo";
import {embaralharAlternativas} from "../../utils/embaralharAlternativas";

const casasTabuleiro = require('../../utils/casasTabuleiro').casasTabuleiro;
const pecaMovendo = new Audio("./sons/Step.mp3");
const cliqueBotao = new Audio("./sons/mixkit-select-click-1109.wav");
const questoes = require("../../utils/bancoQuestoes");

embaralharAlternativas(questoes);

class ConfiguracoesJogoContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            grupoJogadores: [], // Utilizado quando o modo é "Sala de Aula"
            turnoAtualGrupo: 1,
            jogoIniciado: false,
            disableIniciarSalaDeAula: true,
            desabilitarDado: false,
            exibirQuiz: false,
            dificuldadeQuestao: "",
            grupoAtual: [],
            controladorQuiz: false,
            questoes: [],
            modoJogo: "Sala de Aula",
            fimDeJogo: false,
            grupoVencedor: 0
        }
    }

    componentDidMount() {
        this.setState({questoes});
    }

    renovarQuestoesEsgotadas = (dificuldade) => {
        let questoesAtuais = this.state.questoes;
        const indexDificuldade = questoes.findIndex(e => e.dificuldade === dificuldade);
        questoesAtuais[indexDificuldade].questoes = questoes[indexDificuldade].questoes;

        this.setState({questoes: questoesAtuais});
    };

    alternarGrupoAtual = (modoJogo) => {
        if (modoJogo === "Sala de Aula") {
            let quantidadeGrupos = this.state.grupoJogadores.length;

            let grupoAtual = this.state.turnoAtualGrupo;
            if (grupoAtual === quantidadeGrupos) {
                grupoAtual = 1;
            } else {
                grupoAtual += 1;
            }

            this.setState({turnoAtualGrupo: grupoAtual});
        }
    };

    moverPeao = (jogador, qtdCasas, modoJogo, respostaQuiz, direcao) => {
        if (modoJogo === "Sala de Aula") {
            let grupoJogadores = this.state.grupoJogadores;
            let indexGrupo = grupoJogadores.findIndex(e => e.numero === jogador.numero);
            let fimDeJogo = false;

            this.setState({desabilitarDado: true});

            for (let i = 0; i < qtdCasas; i++) {
                if (fimDeJogo === false) {
                    setTimeout(() => {
                        direcao === "Avançar" ? grupoJogadores[indexGrupo].casaAtual++ : grupoJogadores[indexGrupo].casaAtual--;

                        let casaAtual = grupoJogadores[indexGrupo].casaAtual;

                        if (casaAtual <= 37) {
                            grupoJogadores[indexGrupo].posicaoTabuleiro = {
                                linha: casasTabuleiro[casaAtual - 1].linha,
                                coluna: casasTabuleiro[casaAtual - 1].coluna
                            };
                            pecaMovendo.play();

                            if (casaAtual === 37) { // Verificando se algum grupo chegou na casa final
                                fimDeJogo = true;
                                this.setState({fimDeJogo, grupoVencedor: grupoJogadores[indexGrupo].numero});

                            }

                            if (i === qtdCasas - 1) {
                                setTimeout(() => {
                                    this.setState({desabilitarDado: false});
                                    this.verificarDesafio(grupoJogadores[indexGrupo]);
                                    if (respostaQuiz !== true) {
                                        this.alternarGrupoAtual("Sala de Aula");
                                    }
                                }, 1000);
                            }

                            this.setState({grupoJogadores});
                        }
                    }, i * 500);
                }
            }
        }
    };

    verificarDesafio = (grupo) => {
        let dificuldade = casasTabuleiro[grupo.casaAtual - 1].dificuldade;

        if (dificuldade !== "") {
            this.setState({
                exibirQuiz: true,
                dificuldadeQuestao: dificuldade,
                grupoAtual: grupo
            });
        }
    };

    reiniciarGrupos = () => {
        this.setState({grupoJogadores: [], disableIniciarSalaDeAula: true})
    };

    fecharQuiz = (qtdCasas, direcao) => {
        this.setState({exibirQuiz: false, controladorQuiz: !this.state.controladorQuiz});

        setTimeout(() => {
            this.moverPeao(this.state.grupoAtual, qtdCasas, this.state.modoJogo, true, direcao);
        }, 1000);
    };

    removerQuestaoBanco = (indexDificuldade, indexQuestao) => {
        let questoes = JSON.parse(JSON.stringify(this.state.questoes));
        questoes[indexDificuldade].questoes.splice(indexQuestao, 1); // Removendo questão da lista

        this.setState({questoes});
    };

    onAdicionarGrupoJogadores = (peao, grupo, caminho) => {
        let grupoJogadores = this.state.grupoJogadores;

        grupoJogadores.push({
            posicaoTabuleiro: {linha: casasTabuleiro[0].linha, coluna: casasTabuleiro[0].coluna},
            casaAtual: 1,
            numero: grupo,
            caminhoPeao: caminho,
            corPeao: peao
        });

        if (grupoJogadores.length >= 2) {
            this.setState({disableIniciarSalaDeAula: false});
        }

        this.setState({grupoJogadores});
    };

    onIniciarJogo = () => {
        this.setState({jogoIniciado: true});

        cliqueBotao.play();
    };

    reiniciarJogo = () => {
        const questoes = JSON.parse(JSON.stringify(this.state.questoes));
        const questoesEmbaralhadas = embaralharAlternativas(questoes);

        this.setState({
            grupoJogadores: [],
            turnoAtualGrupo: 1,
            jogoIniciado: false,
            disableIniciarSalaDeAula: true,
            desabilitarDado: false,
            exibirQuiz: false,
            dificuldadeQuestao: "",
            grupoAtual: [],
            controladorQuiz: false,
            modoJogo: "",
            fimDeJogo: false,
            questoes: questoesEmbaralhadas
        })
    };

    render() {
        return (
            <ConfiguracoesJogo
                onAdicionarGrupoJogadores={this.onAdicionarGrupoJogadores}
                reiniciarGrupos={this.reiniciarGrupos}
                onIniciarJogo={this.onIniciarJogo}
                moverPeao={this.moverPeao}
                fecharQuiz={this.fecharQuiz}
                grupoJogadores={this.state.grupoJogadores}
                jogador={this.state.jogador}
                jogoIniciado={this.state.jogoIniciado}
                disableIniciarSalaDeAula={this.state.disableIniciarSalaDeAula}
                turnoAtualGrupo={this.state.turnoAtualGrupo}
                desabilitarDado={this.state.desabilitarDado}
                exibirQuiz={this.state.exibirQuiz}
                grupoAtual={this.state.grupoAtual}
                dificuldadeQuestao={this.state.dificuldadeQuestao}
                controladorQuiz={this.state.controladorQuiz}
                questoes={this.state.questoes}
                removerQuestaoBanco={this.removerQuestaoBanco}
                onSelecionarModoMenu={this.props.onSelecionarModoMenu}
                fimDeJogo={this.state.fimDeJogo}
                grupoVencedor={this.state.grupoVencedor}
                reiniciarJogo={this.reiniciarJogo}
                renovarQuestoesEsgotadas={this.renovarQuestoesEsgotadas}
            />
        );
    }
}

export default ConfiguracoesJogoContainer;