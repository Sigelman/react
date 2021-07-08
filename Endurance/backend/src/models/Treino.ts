import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Aluno from './Aluno';

@Entity('treinos')
export default class Treino {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    metodo: number;
    
    @Column()
    minutagem: number;

    @Column()
    distancia: number;

    @Column()
    zonaesforco:number;

    @Column()
    terreno:number;

    @Column()
    pseprevista:number;

    @Column()
    sessao:number;

    @ManyToOne( () => Aluno, aluno =>  aluno.treinos)
    @JoinColumn({name: 'aluno_id'})
    aluno: Aluno;

}