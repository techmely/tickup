import { AggregateRoot } from "../../../core/domain/entities/aggregate.base";
import type { FileProps } from "./file.types";

export class FileEntity extends AggregateRoot<FileProps> {
  validate(): void {
    throw new Error("Method not implemented.");
  }
}
