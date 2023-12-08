import { Test, TestingModule } from '@nestjs/testing';
import { MixepanelService } from './mixepanel.service';

describe('MixepanelService', () => {
  let service: MixepanelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MixepanelService],
    }).compile();

    service = module.get<MixepanelService>(MixepanelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
