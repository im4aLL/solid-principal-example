import { Test, TestingModule } from '@nestjs/testing';
import { SqliteDatabaseService } from './sqlite-database.service';

describe('SqliteDatabaseService', () => {
  let service: SqliteDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqliteDatabaseService],
    }).compile();

    service = module.get<SqliteDatabaseService>(SqliteDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
