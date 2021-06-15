import React, {Component} from 'react';
import ConfiguracoesJogoContainer from '../ConfiguracoesJogo/ConfiguracoesJogoContainer';
import Regras from './Regras/Regras';
import Creditos from './Creditos/Creditos';

class MenuJogo extends Component {
    render() {
        switch (this.props.modoMenu) {
            case "":
                return (
                    <div className="text-center">
                        <h1>Caminhada no Octógono</h1>
                        <p/>
                        <img src={"./imagens/botoes/botao_jogar.png"}
                             alt={"jogar"}
                             onClick={() => {
                                 this.props.onSelecionarModoMenu("Jogar")
                             }}
                             className="button-img"/>
                        <p/>
                        <img src={"./imagens/botoes/botao_regras.png"}
                             alt={"regras"}
                             onClick={() => {
                                 this.props.onSelecionarModoMenu("Regras")
                             }}
                             className="button-img"/>
                        <p/>
                        <img src={"./imagens/botoes/botao_creditos.png"}
                             alt={"creditos"}
                             onClick={() => {
                                 this.props.onSelecionarModoMenu("Creditos")
                             }}
                             className="button-img"/>
                    </div>
                );

            case "Jogar":
                return (<ConfiguracoesJogoContainer
                    onSelecionarModoMenu={this.props.onSelecionarModoMenu}
                />);

            case "Regras":
                return (<Regras
                    onSelecionarModoMenu={this.props.onSelecionarModoMenu}
                />);

            case "Creditos":
                return (<Creditos
                    onSelecionarModoMenu={this.props.onSelecionarModoMenu}
                />);

            default:
                return <div/>

        }
    }
}

export default MenuJogo;