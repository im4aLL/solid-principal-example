import { Test, TestingModule } from '@nestjs/testing';
import { GcUploadAdapterService } from './gc-upload-adapter.service';

describe('GcUploadAdapterService', () => {
  let service: GcUploadAdapterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GcUploadAdapterService],
    }).compile();

    service = module.get<GcUploadAdapterService>(GcUploadAdapterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
