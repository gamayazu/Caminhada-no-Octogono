import React, {Component} from 'react';
import SelecaoGrupos from "./SelecaoGrupos";
import TabuleiroContainer from "../Tabuleiro/TabuleiroContainer";
import QuizContainer from "../Quiz/QuizContainer";

class ConfiguracoesJogo extends Component {
    render() {
        if (this.props.jogoIniciado === false) {
            return (
                <SelecaoGrupos
                    grupoJogadores={this.props.grupoJogadores}
                    reiniciarGrupos={this.props.reiniciarGrupos}
                    onAdicionarGrupoJogadores={this.props.onAdicionarGrupoJogadores}
                    onIniciarJogo={this.props.onIniciarJogo}
                    disableIniciarSalaDeAula={this.props.disableIniciarSalaDeAula}
                    onSelecionarModoMenu={this.props.onSelecionarModoMenu}
                />
            )
        } else if (this.props.exibirQuiz === false) {
            return (
                <TabuleiroContainer
                    grupoVencedor={this.props.grupoVencedor}
                    fimDeJogo={this.props.fimDeJogo}
                    grupoJogadores={this.props.grupoJogadores}
                    moverPeao={this.props.moverPeao}
                    turnoAtualGrupo={this.props.turnoAtualGrupo}
                    desabilitarDado={this.props.desabilitarDado}
                    reiniciarJogo={this.props.reiniciarJogo}
                />
            )
        } else {
            return (
                <QuizContainer
                    grupoAtual={this.props.grupoAtual}
                    dificuldadeQuestao={this.props.dificuldadeQuestao}
                    moverPeao={this.props.moverPeao}
                    fecharQuiz={this.props.fecharQuiz}
                    modoJogo={this.props.modoJogo}
                    controladorQuiz={this.props.controladorQuiz}
                    exibirQuiz={this.props.exibirQuiz}
                    questoes={this.props.questoes}
                    removerQuestaoBanco={this.props.removerQuestaoBanco}
                    renovarQuestoesEsgotadas={this.props.renovarQuestoesEsgotadas}
                />
            )
        }
    }
}

export default ConfiguracoesJogo;