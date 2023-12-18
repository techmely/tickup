import { Entity } from "../domain/entities/entity.base";

export interface Mapper<DomainEntity extends Entity<any>, DbRecord, Response> {
  toPersistence(entity: DomainEntity): DbRecord;
  toDomain(record: any): DomainEntity;
  toResponse(entity: DomainEntity): Response;
}
