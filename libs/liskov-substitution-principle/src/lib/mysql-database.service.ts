import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class MysqlDatabaseService implements DatabaseService {
  selectQuery(): string {
    return 'mysql select query';
  }
}
