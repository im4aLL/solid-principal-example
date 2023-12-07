import { Module } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { S3UploadAdapterService } from './adapters/s3-upload-adapter.service';
import { GcUploadAdapterService } from './adapters/gc-upload-adapter.service';
import { UploadController } from './upload.controller';

@Module({
  controllers: [UploadController],
  providers: [UploaderService, S3UploadAdapterService, GcUploadAdapterService],
  exports: [],
})
export class OcpModule {}
