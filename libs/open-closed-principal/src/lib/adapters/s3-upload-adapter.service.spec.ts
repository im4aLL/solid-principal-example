import { Test, TestingModule } from '@nestjs/testing';
import { S3UploadAdapterService } from './s3-upload-adapter.service';

describe('S3UploadAdapterService', () => {
  let service: S3UploadAdapterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [S3UploadAdapterService],
    }).compile();

    service = module.get<S3UploadAdapterService>(S3UploadAdapterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
