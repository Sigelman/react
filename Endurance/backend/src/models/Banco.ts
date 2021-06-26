import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('bancos')
export default class Banco  {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    codigo: string;
    
    @Column()
    nome: string;
}