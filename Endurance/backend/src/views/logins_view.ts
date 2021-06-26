import Login from '../models/Login';

export default {
    render (login: Login) {
        return {
            id: login.id,
            email: login.email,
            senha: login.senha,
            primeiro_acesso: login.primeiro_acesso,
            perfil: login.perfil,
            cadastro_id:login.cadastro_id,
        };
    },
    renderMany(logins: Login[]) {
        return logins.map(login => this.render(login));
    }
};