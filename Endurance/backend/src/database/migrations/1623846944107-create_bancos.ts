import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createBancos1623846944107 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
          name:'bancos',
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
                  name:'codigo',
                  type:'varchar',
              },
              {
                  name:'nome',
                  type:'varchar',
              }
          ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('bancos');
    }

}
