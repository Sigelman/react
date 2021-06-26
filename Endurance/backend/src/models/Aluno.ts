import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Personal from './Personal';

@Entity('alunos')
export default class Aluno {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;
    
    @Column()
    idade: number;

    @Column()
    sexo: string;

    @Column()
    peso:number;

    @Column()
    altura:number;

    @Column()
    cintura:number;

    @Column()
    sessoes:number;
    
    @ManyToOne( () => Personal, personal =>  personal.alunos)
    @JoinColumn({name: 'personal_id'})
    personal: Personal;
}