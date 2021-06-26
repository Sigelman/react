import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Banco from '../models/Banco';
import bancoView from '../views/bancos_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
  
        const {
            codigo,
            nome,
        } = request.body;
    
        const bancosReposiroty = getRepository(Banco);
        const data = {
            codigo,
            nome,
        };

        const schema = Yup.object().shape({
            codigo: Yup.string().required("Código obrigatório"),
            nome: Yup.string().required("Nome obrigatório"),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const banco = bancosReposiroty.create(data);
    
        await bancosReposiroty.save(banco);
    
        return response.status(201).json(banco);
              
        },

     async index(request: Request, response: Response) {
       const  bancosRepository = getRepository(Banco);
       const  bancos = await bancosRepository.find();
       return response.json(bancoView.renderMany(bancos));
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const  bancosRepository = getRepository(Banco);
        const  banco = await bancosRepository.findOneOrFail(id);
        return response.json(bancoView.render(banco));
     },   

    async update(request: Request, response: Response) {
        const  bancosRepository = getRepository(Banco);
        const  bancos = await bancosRepository.find();
        return response.json(bancos);
     },
     

}