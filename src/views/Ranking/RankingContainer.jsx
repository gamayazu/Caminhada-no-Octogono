import React, {Component} from 'react';
import Ranking from "./Ranking";

class RankingContainer extends Component {
    render() {
        let grupoJogadores = JSON.parse(JSON.stringify(this.props.grupoJogadores)); // Cópia sem referência
        let grupoRanqueado = grupoJogadores.sort((a, b) => {
            return b.casaAtual - a.casaAtual;
        });

        return (
            <Ranking
                grupoRanqueado={grupoRanqueado}
            />
        );
    }
}

export default RankingContainer;