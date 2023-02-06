import { MigrationInterface, QueryRunner } from "typeorm";

export class table1674916097545 implements MigrationInterface {
    name = 'table1674916097545'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "first_name" character varying(63) NOT NULL, "last_name" character varying(63) NOT NULL, "email" character varying(63) NOT NULL, "gender" character varying(63) NOT NULL, "ip_address" character varying(63) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
