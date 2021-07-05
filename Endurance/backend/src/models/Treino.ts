import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

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

    @Column()
    aluno_id:number;
}