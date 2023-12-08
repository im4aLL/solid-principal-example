import { Test, TestingModule } from '@nestjs/testing';
import { LocalLoggerService } from './local-logger.service';

describe('LocalLoggerService', () => {
  let service: LocalLoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalLoggerService],
    }).compile();

    service = module.get<LocalLoggerService>(LocalLoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
