import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Aluno from './Aluno';

@Entity('personal')
export default class Personal {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;
    
    @Column()
    banco_id: number;

    @Column()
    agencia: string;

    @Column()
    conta:string;

    @OneToMany(() => Aluno, aluno =>  aluno.personal)
    @JoinColumn({name: 'personal_id'})
    alunos: Aluno[]; 
}