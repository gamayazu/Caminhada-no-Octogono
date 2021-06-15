export function embaralharAlternativas(questoes) {
    for (let i in questoes) { // Para cada dificuldade
        for (let j in questoes[i].questoes) { // Para cada questão
            let alternativaCorreta = questoes[i].questoes[j].alternativaCorreta;
            let indexValor = questoes[i].questoes[j].opcoes.findIndex(e => e.alternativa === alternativaCorreta);

            if (indexValor !== -1) {
                let valorCorreto = questoes[i].questoes[j].opcoes[indexValor].valor;
                let vetorValores = [];

                questoes[i].questoes[j].opcoes.forEach(opcao => {
                    vetorValores.push(opcao.valor);
                });

                let valoresEmbaralhados = embaralhar(vetorValores);

                questoes[i].questoes[j].opcoes.forEach((opcao, k) => {
                    questoes[i].questoes[j].opcoes[k].valor = valoresEmbaralhados[k];

                });

                let novoIndexAlternativaCorreta = questoes[i].questoes[j].opcoes.findIndex(e => e.valor === valorCorreto);
                questoes[i].questoes[j].alternativaCorreta = questoes[i].questoes[j].opcoes[novoIndexAlternativaCorreta].alternativa;

            }
        }
    }
    return questoes;
}

function embaralhar(valores) {
    for (let i = valores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valores[i], valores[j]] = [valores[j], valores[i]];
    }
    return valores;
}