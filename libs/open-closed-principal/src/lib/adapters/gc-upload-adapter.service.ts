import { Injectable } from '@nestjs/common';
import { UploadAdapter } from './upload-adapter';
import { UploadFileDto } from '../dto/upload-file.dto';

@Injectable()
export class GcUploadAdapterService implements UploadAdapter {
  upload(uploadFileDto: UploadFileDto): string {
    return `${uploadFileDto.name} uploaded to google cloud`;
  }
}
