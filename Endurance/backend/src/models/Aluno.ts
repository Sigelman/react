import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from 'typeorm';
import Personal from './Personal';
import Treino from './Treino'

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

    @OneToMany(() => Treino, treino =>  treino.aluno)
    @JoinColumn({name: 'aluno_id'})
    treinos: Treino[]; 

}