import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Injectable()
export class SqliteDatabaseService implements DatabaseService {
  selectQuery(): string {
    return 'sqlite select query';
  }
}
