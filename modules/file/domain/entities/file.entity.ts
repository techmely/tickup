import { AggregateRoot } from "../../../core/domain-base/entities/aggregate.base";
import type { FileProps } from "../../helpers/file.types";

export class FileEntity extends AggregateRoot<FileProps> {
  validate(): void {
    throw new Error("Method not implemented.");
  }
}
