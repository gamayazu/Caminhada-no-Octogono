import React, {Component, Fragment} from 'react';
import Quiz from "./Quiz";
import ModalResultadoResposta from "./ModalResultadoResposta";

const casasTabuleiro = require('../../utils/casasTabuleiro').casasTabuleiro;
const respostaCorreta = new Audio("./sons/mixkit-correct-positive-answer-949.wav");
const respostaIncorreta = new Audio("./sons/mixkit-wrong-answer-fail-notification-946.wav");
const timer = new Audio("./sons/mixkit-game-show-happy-timer-666.mp3");

class QuizContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questaoAtual: {},
            alternativaSelecionada: "",
            alternativaCorreta: "",
            isOpen: false,
            qtdCasas: 0,
            direcao: "",
            pararTimer: false
        }
    }

    sortearQuestao = (dificuldade) => {
        const indexDificuldade = this.props.questoes.findIndex(e => e.dificuldade === dificuldade);
        let questoesDisponiveis = [];
        let qtdQuestoes = 0;

        if (indexDificuldade !== -1) {
            questoesDisponiveis = this.props.questoes[indexDificuldade].questoes;
            qtdQuestoes = this.props.questoes[indexDificuldade].questoes.length;

            // Obtendo questão aleatória dentre as questões disponíveis

            let indexQuestaoSorteada = Math.floor(Math.random() * qtdQuestoes);
            this.setState({
                questaoAtual: questoesDisponiveis[indexQuestaoSorteada],
                alternativaCorreta: questoesDisponiveis[indexQuestaoSorteada].alternativaCorreta
            });
           if(this.props.questoes[indexDificuldade].questoes.length === 1){
               this.props.renovarQuestoesEsgotadas(dificuldade);
           }
           this.props.removerQuestaoBanco(indexDificuldade, indexQuestaoSorteada);
        }
    };

    componentDidMount() {
        this.sortearQuestao(this.props.dificuldadeQuestao);
        timer.volume = 0.3;
        timer.loop = true;

        timer.play();

    }

    responderQuestao = async () => {
        let respostaCerta = this.state.alternativaCorreta === this.state.alternativaSelecionada;
        let direcao = this.state.alternativaCorreta === this.state.alternativaSelecionada ? "Avançar" : "Voltar";
        let casaAtual = this.props.grupoAtual.casaAtual;
        let qtdCasas = 0;

        if (respostaCerta) {
            qtdCasas = casasTabuleiro[casaAtual - 1].qtdCasasAcerto;
            respostaCorreta.play();
        } else {
            qtdCasas = casasTabuleiro[casaAtual - 1].qtdCasasErro;
            respostaIncorreta.play();
        }

        this.setState({qtdCasas, direcao});
        this.toggle();

        setTimeout(() => {
            if (this.state.isOpen === true) {
                this.toggle()
            }
        }, 3000);
    };

    selecionarAlternativa = (alternativa) => {
        this.setState({alternativaSelecionada: alternativa});
    };

    toggle = () => {
        let fecharQuiz = false;

        this.setState({pararTimer: true});
        timer.pause();

        if (this.state.isOpen === true) {
            fecharQuiz = true;
        }
        this.setState({isOpen: !this.state.isOpen});
        if (fecharQuiz) {
            this.props.fecharQuiz(this.state.qtdCasas, this.state.direcao);
        }
    };

    tempoEsgotado = () => {
        this.responderQuestao()
    };

    render() {
        return (
            <Fragment>
                <ModalResultadoResposta
                    grupoAtual={this.props.grupoAtual}
                    qtdCasas={this.state.qtdCasas}
                    isOpen={this.state.isOpen}
                    toggle={this.toggle}
                    fecharQuiz={this.props.fecharQuiz}
                    acerto={this.state.alternativaSelecionada === this.state.alternativaCorreta}
                />
                <Quiz
                    dificuldadeQuestao={this.props.dificuldadeQuestao}
                    tempoEsgotado={this.tempoEsgotado}
                    responderQuestao={this.responderQuestao}
                    exibirQuiz={this.props.exibirQuiz}
                    questaoAtual={this.state.questaoAtual}
                    alternativaSelecionada={this.state.alternativaSelecionada}
                    selecionarAlternativa={this.selecionarAlternativa}
                    pararTimer={this.state.pararTimer}
                />
            </Fragment>
        );
    }
}

export default QuizContainer;