import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Personal from '../models/Personal';
import personalView from '../views/personals_view';
import * as Yup from 'yup';

export default {
    async create(request: Request, response: Response) {

        const {
            nome,
            banco_id,
            agencia,
            conta,
        } = request.body;

        const personalsRepository = getRepository(Personal);
        const data = {
            nome,
            banco_id,
            agencia,
            conta,
        };

        const schema = Yup.object().shape({
            nome: Yup.string().required("Nome obrigatório"),
            banco_id: Yup.string().required("Código do banco obrigatório"),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const personal = personalsRepository.create(data);

        await personalsRepository.save(personal);

        return response.status(201).json(personal);

    },

    async index(request: Request, response: Response) {
        const personalsRepository = getRepository(Personal);
        const personals = await personalsRepository.find({ relations: ['alunos'] });
        return response.json(personalView.renderMany(personals));
    },

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const personalsRepository = getRepository(Personal);
        const personal = await personalsRepository.findOneOrFail(id, { relations: ['alunos'] });
        return response.json(personalView.render(personal));
    },
    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { nome, banco_id, agencia, conta, } = request.body;
        const data = { nome, banco_id, agencia, conta, };

        const personalsRepository = getRepository(Personal);

        const schema = Yup.object().shape({
            nome: Yup.string().required("Nome obrigatório"),
            banco_id: Yup.string().required("Código do banco obrigatório"),
        });

        await schema.validate(data, {
            abortEarly: false,
        });

        const personal = await personalsRepository.update(id, data);
        return response.status(201).json(personal);
    },
    async destroy(request: Request, response: Response) {
        const { id } = request.params;
        const personalsRepository = getRepository(Personal);
        const personal = await personalsRepository.delete(id);
        return response.status(201).json(personal);
    },
}