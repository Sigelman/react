import Treinamento from '../models/Treinamento';

export default {
    render (treinamento: Treinamento) {
        return {
            id: treinamento.id,
            distancia:treinamento.distancia,
            tempo:treinamento.tempo,
            fcrepouso:treinamento.fcrepouso,
            fcmedia:treinamento.fcmedia,
            fcmaxima:treinamento.fcmaxima,
            pse:treinamento.pse,
            sessao:treinamento.sessao,
            treino_id:treinamento.treino_id,
            aluno_id:treinamento.aluno_id,
        };
    },
    renderMany(treinamentos: Treinamento[]) {
        return treinamentos.map(treinamento => this.render(treinamento));
    }
};