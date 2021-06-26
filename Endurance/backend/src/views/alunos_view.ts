//import AlunoController from '../controllers/AlunoController';
import Aluno from '../models/Aluno';

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
        };
    },
    renderMany(alunos: Aluno[]) {
        return alunos.map(aluno => this.render(aluno));
    }
};