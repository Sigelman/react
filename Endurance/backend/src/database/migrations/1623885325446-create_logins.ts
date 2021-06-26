import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createLogins1623885325446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'login',
            columns:[
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated:true,
                    generationStrategy:'increment',
                },
                {
                    name:'email',
                    type:'varchar',
                },
                {
                    name:'senha',
                    type:'varchar',
                },
                {
                    name:'primeiro_acesso',
                    type:'boolean',
                },
                {
                    name:'perfil',
                    type:'varchar',
                },
                {
                    name:'cadastro_id',
                    type:'integer',
                }
            ],
          }))
  
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('login');

    }

}
