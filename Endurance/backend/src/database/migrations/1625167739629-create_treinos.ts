import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createTreinos1625167739629 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'treinos',
            columns: [

                {
                    name: 'id',
                    type: 'int',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'metodo',
                    type: 'integer',
                },
                {
                    name: 'minutagem',
                    type: 'integer',
                },
                {
                    name: 'distancia',
                    type: 'double',
                },
                {
                    name: 'zonaesforco',
                    type: 'integer',
                },
                {
                    name: 'terreno',
                    type: 'integer',
                },
                {
                    name: 'pseprevista',
                    type: 'integer',
                },
                {
                    name: 'sessao',
                    type: 'integer',
                },
                {
                    name: 'aluno_id',
                    type: 'int',
                    unsigned: true,
                }

            ],
            foreignKeys: [
                {
                name: 'TreinoAluno',
                columnNames: ['aluno_id'],
                referencedTableName: 'alunos',
                referencedColumnNames: ['id'],
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                }

            ]
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('treinos');

    }

}
