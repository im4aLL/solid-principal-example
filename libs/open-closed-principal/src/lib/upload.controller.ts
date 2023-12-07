import { Body, Controller, Post } from '@nestjs/common';
import { UploaderService } from './uploader.service';
import { UploadFileDto } from './dto/upload-file.dto';
import { S3UploadAdapterService } from './adapters/s3-upload-adapter.service';
import { UPLOAD_TYPE } from './interfaces/uploader-type.enum';

@Controller('ocp')
export class UploadController {
  constructor(
    private uploaderService: UploaderService,
    private s3UploadAdapterService: S3UploadAdapterService
  ) {}

  @Post('/bad')
  badUpload(@Body() uploadFileDto: UploadFileDto) {
    return this.uploaderService.badUpload(uploadFileDto.name, UPLOAD_TYPE.S3);
  }

  @Post('/good')
  upload(@Body() uploadFileDto: UploadFileDto): string {
    return this.uploaderService
      .type(this.s3UploadAdapterService)
      .upload(uploadFileDto);
  }
}
