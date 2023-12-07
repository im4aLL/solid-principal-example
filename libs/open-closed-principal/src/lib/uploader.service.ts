import { Injectable } from '@nestjs/common';
import { UploadAdapter } from './adapters/upload-adapter';
import { UPLOAD_TYPE } from './interfaces/uploader-type.enum';
import { UploadFileDto } from './dto/upload-file.dto';

@Injectable()
export class UploaderService {
  private adapter: UploadAdapter;

  // bad ✖
  badUpload(file: string, type: UPLOAD_TYPE) {
    if (type === UPLOAD_TYPE.S3) {
      return `${file} uploaded to s3`;
    } else if (type === UPLOAD_TYPE.GOOGLE_CLOUD) {
      return `${file} uploaded to google cloud`;
    } else {
      return `${file} uploaded to local server`;
    }
  }

  // good ✔
  type(adapter: UploadAdapter): this {
    this.adapter = adapter;

    return this;
  }

  upload(uploadFileDto: UploadFileDto): string {
    return this.adapter.upload(uploadFileDto);
  }
}
