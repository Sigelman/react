import Treino from '../models/Treino';

export default {
    render (treino: Treino) {
        return {
            id: treino.id,
            metodo: treino.metodo,
            minutagem: treino.minutagem,
            distancia: treino.distancia,
            zonaesforco:treino.zonaesforco,
            terreno:treino.terreno,
            pseprevista:treino.pseprevista,
            sessao:treino.sessao,
            id_aluno:treino.id_aluno,
        };
    },
    renderMany(treinos: Treino[]) {
        return treinos.map(treino => this.render(treino));
    }
};