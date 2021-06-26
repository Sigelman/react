import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Login from '../models/Login';
import loginView from '../views/logins_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
  
        const {
            email,
            senha,
            primeiro_acesso,
            perfil,
            cadastro_id,
            } = request.body;
    
        const loginsRepository = getRepository(Login);
        const data = {
            email,
            senha,
            primeiro_acesso,
            perfil,
            cadastro_id,
        };

        const schema = Yup.object().shape({
            email: Yup.string().required("Email obrigatório"),
            senha: Yup.string().required("Senha obrigatória"),
            primeiro_acesso: Yup.boolean(),
            perfil: Yup.string().max(1),
            cadastro_id: Yup.number(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const login = loginsRepository.create(data);
    
        await loginsRepository.save(login);
    
        return response.status(201).json(login);
              
        },

     async index(request: Request, response: Response) {
       const  loginsRepository = getRepository(Login);
       const  logins = await loginsRepository.find();
       return response.json(loginView.renderMany(logins));
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const  loginsRepository = getRepository(Login);
        const  login = await loginsRepository.findOneOrFail(id);
        return response.json(loginView.render(login));
     },
     
     

     async update(request: Request, response: Response) {
  
        const {id} = request.params;
        const {
            email,
            senha,
            primeiro_acesso,
            perfil,
            cadastro_id,
            } = request.body;
    
        const loginsRepository = getRepository(Login);
        const data = {
            email,
            senha,
            primeiro_acesso,
            perfil,
            cadastro_id,
        };

        const userAlreaadExist = await getRepository(Login).findOne({email});
        if (userAlreaadExist) {
            throw new Error('Email já cadastrado');
        }

        const schema = Yup.object().shape({
            email: Yup.string().required("Email obrigatório"),
            senha: Yup.string().required("Senha obrigatória"),
            primeiro_acesso: Yup.boolean(),
            perfil: Yup.string().max(1),
            cadastro_id: Yup.number(),
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        
        const login = await loginsRepository.update(id,data);
    
        //await loginsRepository.save(login);
    
        return response.status(201).json(login);
              
        },

        async destroy (request: Request, response: Response) {
            const {id} = request.params;
            const  loginsRepository = getRepository(Login);
            const  login = await loginsRepository.delete(id);
             
            return response.status(201).json(login);
          }
}