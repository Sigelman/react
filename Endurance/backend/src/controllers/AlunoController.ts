import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Aluno from '../models/Aluno';
import alunoView from '../views/alunos_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {
  
        const {
            nome,
            idade,
            sexo,
            peso,
            altura,
            cintura,
            sessoes,
            personal_id,
        } = request.body;
    
        const alunosReposiroty = getRepository(Aluno);
        const data = {
            nome,
            idade,
            sexo,
            peso,
            altura,
            cintura,
            sessoes,
            personal_id,
        };

        const schema = Yup.object().shape({
            nome: Yup.string().required("Nome obrigatório"),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const aluno = alunosReposiroty.create(data);
    
        await alunosReposiroty.save(aluno);
    
        return response.status(201).json(aluno);
              
        },

     async index(request: Request, response: Response) {
       const  alunosRepository = getRepository(Aluno);
       const  alunos = await alunosRepository.find();
       return response.json(alunoView.renderMany(alunos));
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const  alunosRepository = getRepository(Aluno);
        const  aluno = await alunosRepository.findOneOrFail(id);
        return response.json(alunoView.render(aluno));
     },

     
     async update(request: Request, response: Response) {
  
        const {id} = request.params;
        const {
            nome,
            idade,
            sexo,
            peso,
            altura,
            cintura,
            sessoes,
            personal_id,
            } = request.body;
    
        const alunosRepository = getRepository(Aluno);
        const data = {
            nome,
            idade,
            sexo,
            peso,
            altura,
            cintura,
            sessoes,
            personal_id,
        };

        const schema = Yup.object().shape({
            nome: Yup.string().required("Nome obrigatório"),
            personal_id: Yup.number().required('deve vincular-se a um personal'),
        });

        await schema.validate(data, {
            abortEarly: false,
        });
        
        const aluno = await alunosRepository.update(id,data);
    
        return response.status(201).json(aluno);
              
        },

        async destroy (request: Request, response: Response) {
            const {id} = request.params;
            const  alunosRepository = getRepository(Aluno);
            const  aluno = await alunosRepository.delete(id);
             
            return response.status(201).json(aluno);
          }

}