import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Treino from '../models/Treino';
import treinoView from '../views/treinos_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
  
        const {
            metodo,
            minutagem,
            distancia,
            zonaesforco,
            terreno,
            pseprevista,
            sessao,
            aluno_id,

        } = request.body;
    
        const treinosReposiroty = getRepository(Treino);
        const data = {
            metodo,
            minutagem,
            distancia,
            zonaesforco,
            terreno,
            pseprevista,
            sessao,
            aluno_id,
        };        


        const treino = treinosReposiroty.create(data);
    
        await treinosReposiroty.save(treino);
    
        return response.status(201).json(treino);
              
    },

     async index(request: Request, response: Response) {
       const  treinosRepository = getRepository(Treino);
       const  treinos = await treinosRepository.find();
       return response.json(treinoView.renderMany(treinos));
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const  treinosRepository = getRepository(Treino);
        const  treino = await treinosRepository.findOneOrFail(id);
        return response.json(treinoView.render(treino));
     },

     
     async update(request: Request, response: Response) {
  
        const {id} = request.params;
        const {
            metodo,
            minutagem,
            distancia,
            zonaesforco,
            terreno,
            pseprevista,
            sessao,
            aluno_id,
            } = request.body;
    
        const treinosRepository = getRepository(Treino);
        const data = {
            metodo,
            minutagem,
            distancia,
            zonaesforco,
            terreno,
            pseprevista,
            sessao,
            aluno_id,
        };

        const schema = Yup.object().shape({
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        
        const treino = await treinosRepository.update(id,data);
    
        return response.status(201).json(treino);
              
        },

        async destroy (request: Request, response: Response) {
            const {id} = request.params;
            const  treinosRepository = getRepository(Treino);
            const  treino = await treinosRepository.delete(id);
             
            return response.status(201).json(treino);
          }

}