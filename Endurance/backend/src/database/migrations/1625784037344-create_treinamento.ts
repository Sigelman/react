import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTreinamento1625784037344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'treinamento',
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
                    name: 'distancia',
                    type: 'double',
                },
                {
                    name: 'tempo',
                    type: 'varchar',
                },
                {
                    name: 'fcrepouso',
                    type: 'integer',
                },
                {
                    name: 'fcmedia',
                    type: 'integer',
                },
                {
                    name: 'fcmaxima',
                    type: 'integer',
                },
                {
                    name: 'pse',
                    type: 'integer',
                },
                {
                    name: 'sessao',
                    type: 'integer',
                },
                {
                    name:'treino_id',
                    type:'int',
                    unsigned: true,
                },
                {
                    name: 'aluno_id',
                    type: 'int',
                    unsigned: true,
                }

            ],
            foreignKeys: [
                {
                    name: 'TreinamentoTreino',
                    columnNames: ['treino_id'],
                    referencedTableName: 'treinos',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    name: 'TreinamentoAluno',
                    columnNames: ['aluno_id'],
                    referencedTableName: 'alunos',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }));

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('treinamento');
    }

}
