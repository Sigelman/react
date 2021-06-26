import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createPersonal1623965321670 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'personal',
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
                    name:'nome',
                    type:'varchar',
                },
                {
                    name:'banco_id',
                    type:'integer',
                },
                {
                    name:'agencia',
                    type:'varchar',
                },
                {
                    name:'conta',
                    type:'varchar',
                }
            ],
          }));
          await queryRunner.createForeignKey("personal", new TableForeignKey({
            columnNames: ["banco_Id"],
            referencedColumnNames: ["id"],
            referencedTableName: "bancos",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('personal');
    }

}
