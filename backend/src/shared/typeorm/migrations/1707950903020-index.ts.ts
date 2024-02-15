import { MigrationInterface, QueryRunner } from 'typeorm';

export class IndexTs1707950903020 implements MigrationInterface {
  name = 'IndexTs1707950903020';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Task" ADD "description" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "Task" ADD "title" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "Task" DROP COLUMN "title"`);
    await queryRunner.query(`ALTER TABLE "Task" DROP COLUMN "description"`);
  }
}
