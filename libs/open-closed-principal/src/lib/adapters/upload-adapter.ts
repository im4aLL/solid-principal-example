import { UploadFileDto } from '../dto/upload-file.dto';

export abstract class UploadAdapter {
  abstract upload(uploadFileDto: UploadFileDto): string;
}
