import { Injectable } from '@nestjs/common';
import { UploadAdapter } from './upload-adapter';
import { UploadFileDto } from '../dto/upload-file.dto';

@Injectable()
export class S3UploadAdapterService implements UploadAdapter {
  upload(uploadFileDto: UploadFileDto): string {
    return `${uploadFileDto.name} uploaded to s3`;
  }
}
