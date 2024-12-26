import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1734752171133 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns:[
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary:true
                        // default: 'uuid_generate_v4()', Caso seja PostgreSQL
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length:'100'
                    },
                    {
                        name:'email',
                        type:'varchar',
                        length:'250',
                        isUnique:true
                    },
                    {
                       name:'phone',
                        type:'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    // {
                    //     name: 'updated_at',
                    //     type: 'timestamp',
                    //     default: 'now()',      sqlite não aceita 
                    // }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       await queryRunner.dropTable('users')
    }
}