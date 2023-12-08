import { Controller, Get, Inject } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { MysqlDatabaseService } from './mysql-database.service';
import { SqliteDatabaseService } from './sqlite-database.service';

@Controller('lsp')
export class LspController {
  constructor(
    @Inject(SqliteDatabaseService) private databaseService: DatabaseService
  ) {}

  @Get()
  getData(): string {
    // if A is a subtype of B, then objects of type B may be replaced with objects of type A.
    return this.databaseService.selectQuery();
  }
}
