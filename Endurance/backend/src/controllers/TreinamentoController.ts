import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Treinamento from '../models/Treinamento';
import treinamentoView from '../views/treinamentos_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
  
        const {
            distancia,
            tempo,
            fcrepouso,
            fcmedia,
            fcmaxima,
            pse,
            sessao,
            treino_id,
            aluno_id
        } = request.body;
    
        const treinamentosRepository = getRepository(Treinamento);
        const data = {
            distancia,
            tempo,
            fcrepouso,
            fcmedia,
            fcmaxima,
            pse,
            sessao,
            treino_id,
            aluno_id,
        };        


        const treinamento = treinamentosRepository.create(data);
    
        await treinamentosRepository.save(treinamento);
    
        return response.status(201).json(treinamento);
              
    },

     async index(request: Request, response: Response) {
       const  treinamentosRepository = getRepository(Treinamento);
       const  treinamentos = await treinamentosRepository.find();
       return response.json(treinamentoView.renderMany(treinamentos));
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const  treinamentosRepository = getRepository(Treinamento);
        const  treinamento = await treinamentosRepository.findOneOrFail(id);
        return response.json(treinamentoView.render(treinamento));
     },

     
     async update(request: Request, response: Response) {
  
        const {id} = request.params;
        const {
            distancia,
            tempo,
            fcrepouso,
            fcmedia,
            fcmaxima,
            pse,
            sessao,
            treino_id,
            aluno_id
        } = request.body;
    
        const treinamentosRepository = getRepository(Treinamento);
        const data = {
            distancia,
            tempo,
            fcrepouso,
            fcmedia,
            fcmaxima,
            pse,
            sessao,
            treino_id,
            aluno_id,
        };        
        const schema = Yup.object().shape({
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        
        const treinamento = await treinamentosRepository.update(id,data);
    
        return response.status(201).json(treinamento);
              
        },

        async destroy (request: Request, response: Response) {
            const {id} = request.params;
            const  treinamentosRepository = getRepository(Treinamento);
            const  treinamento = await treinamentosRepository.delete(id);
             
            return response.status(201).json(treinamento);
          }

}