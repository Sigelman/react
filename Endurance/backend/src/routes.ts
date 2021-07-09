import { Router } from 'express';
import BancosController from './controllers/BancosController';
import LoginsController from './controllers/LoginController';
import PersonalsController from './controllers/PersonalController';
import AlunosController from './controllers/AlunoController';
import TreinosController from './controllers/TreinoController';
import TreinamentoController from './controllers/TreinamentoController';


const routes = Router();

routes.get('/bancos', BancosController.index);
routes.get('/bancos/:id', BancosController.show);
routes.post('/bancos', BancosController.create);
routes.put('/bancos', BancosController.update);
routes.delete('/bancos/:id', BancosController.destroy);

routes.get('/logins', LoginsController.index);
routes.get('/logins/:id', LoginsController.show);
routes.post('/logins', LoginsController.create);
routes.put('/logins/:id', LoginsController.update);
routes.delete('/logins/:id', LoginsController.destroy);

routes.get('/personals', PersonalsController.index);
routes.get('/personals/:id', PersonalsController.show);
routes.post('/personals', PersonalsController.create);
routes.put('/personals/:id', PersonalsController.update);
routes.delete('/personals/:id', PersonalsController.destroy);

routes.get('/alunos', AlunosController.index);
routes.get('/alunos/:id', AlunosController.show);
routes.post('/alunos', AlunosController.create);
routes.put('/alunos/:id', AlunosController.update);
routes.delete('/alunos/:id', AlunosController.destroy);

routes.get('/treinos', TreinosController.index);
routes.get('/treinos/:id', TreinosController.show);
routes.post('/treinos', TreinosController.create);
routes.put('/treinos/:id', TreinosController.update);
routes.delete('/treinos/:id', TreinosController.destroy);

routes.get('/treinamentos', TreinamentoController.index);
routes.get('/treinamentos/:id', TreinamentoController.show);
routes.post('/treinamentos', TreinamentoController.create);
routes.put('/treinamentos/:id', TreinamentoController.update);
routes.delete('/treinamentos/:id', TreinamentoController.destroy);

export default routes;