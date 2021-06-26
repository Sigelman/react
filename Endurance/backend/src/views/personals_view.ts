//import PersonalController from '../controllers/PersonalController';
import Personal from '../models/Personal';
import alunosView from './alunos_view';

export default {
    render (personal: Personal) {
        return {
            id: personal.id,
            nome: personal.nome,
            banco_id: personal.banco_id,
            alunos: alunosView.renderMany(personal.alunos)
        };
    },
    renderMany(personals: Personal[]) {
        return personals.map(personal => this.render(personal));
    }
};