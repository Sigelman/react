import Banco from '../models/Banco';

export default {
    render (banco: Banco) {
        return {
            id: banco.id,
            codigo: banco.codigo,
            nome: banco.nome,
        };
    },
    renderMany(bancos: Banco[]) {
        return bancos.map(banco => this.render(banco));
    }
};