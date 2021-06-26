import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('login')
export default class Login  {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    email:string;
    
    @Column()
    senha:string;
    
    @Column()
    primeiro_acesso:boolean;
    
    @Column()
    perfil:string;

    @Column()
    cadastro_id:number;
}