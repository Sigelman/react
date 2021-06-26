import {Router} from 'express';
import BancosController from './controllers/BancosController';
import LoginsController from './controllers/LoginController';
import PersonalsController from './controllers/PersonalController';
import AlunosController from './controllers/AlunoController';



const routes = Router();

routes.get('/bancos', BancosController.index);
routes.get('/bancos/:id', BancosController.show);
routes.post('/bancos', BancosController.create);
routes.put('/bancos', BancosController.update);

routes.get('/logins', LoginsController.index);
routes.get('/logins/:id', LoginsController.show);
routes.post('/logins', LoginsController.create);
routes.put('/logins/:id', LoginsController.update);
routes.delete('/logins/:id', LoginsController.destroy);

routes.get('/personals', PersonalsController.index);
routes.get('/personals/:id', PersonalsController.show);
routes.post('/personals', PersonalsController.create);

routes.get('/alunos', AlunosController.index);
routes.get('/alunos/:id', AlunosController.show);
routes.post('/alunos', AlunosController.create);
routes.put('/alunos/:id', AlunosController.update);
routes.delete('/alunos/:id', AlunosController.destroy);


export default routes;