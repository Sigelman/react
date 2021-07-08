import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';
import CadastrarLogin from './pages/cadastrarLogin';
import Personal from './pages/personal';
import Novasenha from './pages/novasenha';
import Aluno from './pages/aluno';
import Cadastraraluno from './pages/cadastrarAluno';
import Treino from './pages/treino';
import Cadastrartreino from './pages/cadastrarTreino';
import Executartreino from './pages/executarTreino';
import Praticatreino from './pages/praticaTreino';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={Login} />
                <Route path="/cadastrarlogin" component={CadastrarLogin} />
                <Route path="/personal" component={Personal} />
                <Route path="/novasenha" component={Novasenha} />
                <Route path="/aluno" component={Aluno} />
                <Route path="/cadastraraluno" component={Cadastraraluno} />
                <Route path="/treino" component={Treino} />
                <Route path="/cadastrartreino" component={Cadastrartreino} />
                <Route path="/executartreino" component={Executartreino} />
                <Route path="/praticatreino" component={Praticatreino} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;