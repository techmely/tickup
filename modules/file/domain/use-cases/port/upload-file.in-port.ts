import type { UseCase } from "../../../../core/domain/use-cases.port.base";
import type { FileEntity } from "../../entities/file.entity";

export interface UploadFileCommand {
  path: string;
  file: Buffer | File;
}

export abstract class UploadFileInPort implements UseCase<UploadFileCommand, FileEntity> {
  abstract execute(uploadFileCommand: UploadFileCommand): Promise<FileEntity>;
}
