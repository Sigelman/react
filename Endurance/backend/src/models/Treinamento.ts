import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';


@Entity('treinamento')
export default class Treino {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    distancia:number;

    @Column()
    tempo: string;
    
    @Column()
    fcrepouso:number;

    @Column()
    fcmedia:number;

    @Column()
    fcmaxima:number;

    @Column()
    pse:number;

    @Column()
    sessao:number;

    @Column()
    treino_id:number;

    @Column()
    aluno_id:number;

}