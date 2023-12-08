import { Module } from '@nestjs/common';
import { MysqlDatabaseService } from './mysql-database.service';
import { SqliteDatabaseService } from './sqlite-database.service';
import { LspController } from './lsp.controller';

@Module({
  controllers: [LspController],
  providers: [MysqlDatabaseService, SqliteDatabaseService],
  exports: [],
})
export class LspModule {}
