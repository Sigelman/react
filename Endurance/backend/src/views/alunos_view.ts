//import AlunoController from '../controllers/AlunoController';
import Aluno from '../models/Aluno';
import treinosView from './treinos_view';

export default {
    render (aluno: Aluno) {
        return {
            id: aluno.id,
            nome: aluno.nome,
            idade: aluno.idade,
            sexo: aluno.sexo,
            peso: aluno.peso,
            altura: aluno.altura,
            cintura: aluno.cintura,
            sessoes: aluno.sessoes,
            treinos: treinosView.renderMany(aluno.treinos)
        };
    },
    renderMany(alunos: Aluno[]) {
        return alunos.map(aluno => this.render(aluno));
    }

};