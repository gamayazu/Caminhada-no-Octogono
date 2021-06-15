import React, {Component} from 'react';
import {Card, CardBody} from "reactstrap";

class Regras extends Component {
    render() {
        return (
            <div>
                <h2 className={"texto"}>Regras</h2>

                <Card body inverse style={{backgroundColor: '#333', borderColor: '#333'}}
                      className="ml-5 mr-5 mt-5 mb-5">
                    <CardBody>
                        <ul className="a">
                            <li>Inicialmente após a definição dos grupos o(a) professor(a) deverá escolher a ordem de
                                cada grupo, por meio de seleção ou sorteio.
                            </li>
                            <li>Antes de começar a partida é indispensável providenciar folhas de rascunho e lápis para
                                cada equipe que irá participar do jogo.
                            </li>
                            <li>O grupo que irá iniciar a partida lança o dado e avança a quantidade de casas
                                obtida na rolagem, seguido pelos demais grupos.
                            </li>
                            <li>Ao cair em casas com a cor diferente de branco, os jogadores terão
                                que responder a uma questão de múltipla escolha. O grupo terá um tempo
                                específico de acordo com a dificuldade da pergunta.
                            </li>
                            <li>Vence o jogo quem primeiro alcançar o octógono que está localizado na última casa
                                (37).
                            </li>
                            <li>A sugestão para aumentar a motivação da turma é colocar alguma recompensa pela sua vitória, incentivando os alunos a darem o seu melhor.
                            </li>

                        </ul>
                    </CardBody>
                </Card>
                <div className={"footer mt-5 mb-5"}>
                    <img className="button-img mx-3" src={"./imagens/botoes/botao_voltar.png"}
                         alt={"voltar"}
                         onClick={() => {
                             this.props.onSelecionarModoMenu("");
                         }}/>
                </div>
            </div>
        );
    }
}

export default Regras;