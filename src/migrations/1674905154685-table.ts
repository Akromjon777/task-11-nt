import { MigrationInterface, QueryRunner } from "typeorm";

export class table1674905154685 implements MigrationInterface {
    name = 'table1674905154685'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "first_name" character varying(63) NOT NULL, "last_name" character varying(63) NOT NULL, "email" character varying(63) NOT NULL, "gender" character varying(63) NOT NULL, "ip_address" character varying(63) NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
