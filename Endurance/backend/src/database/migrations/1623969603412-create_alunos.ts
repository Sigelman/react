import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createAlunos1623962285518 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'alunos',
            columns:[
                {
                    name: 'id',
                    type: 'int',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated:true,
                    generationStrategy:'increment',
                },
                {
                    name:'nome',
                    type:'varchar',
                },
                {
                    name:'idade',
                    type:'integer',
                },
                {
                    name:'sexo',
                    type:'varchar(1)',
                },
                {
                    name:'peso',
                    type:'double',
                },
                {
                    name:'altura',
                    type:'double',
                },
                {
                    name:'cintura',
                    type:'double',
                },
                {
                    name:'sessoes',
                    type:'integer',
                },
                {
                    name:'personal_id',
                    type:'int',
                }

            ],
          }));
          await queryRunner.createForeignKey("alunos", new TableForeignKey({
            columnNames: ["personal_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "personal",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('alunos');
    }

}

