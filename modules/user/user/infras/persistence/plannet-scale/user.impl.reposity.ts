import type { StringEnum } from "@techmely/types";
import type { Paginated, PaginatedQueryParams } from "modules/core/domain-base/repository.port";
import type { UserEntity } from "modules/user/user/domain/entities/user.entity";
import type { IUserRepository } from "modules/user/user/domain/repo/user.repository";

export class UserRepository implements IUserRepository {
  findById(id: string): Promise<Partial<UserEntity>> {
    throw new Error("Method not implemented.");
  }
  findByKey(key: StringEnum<keyof UserEntity>): Promise<Partial<UserEntity>> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  findAllByIds(ids: string[]): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  findAllPaginated(params: PaginatedQueryParams): Promise<Paginated<UserEntity>> {
    throw new Error("Method not implemented.");
  }
  existsById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  count(): Promise<number | bigint> {
    throw new Error("Method not implemented.");
  }
  insert(entity: UserEntity | UserEntity[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  insertBulk(entity: UserEntity | UserEntity[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(entity: UserEntity | UserEntity[]): Promise<void> | Promise<UserEntity | UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  updateBulk(
    entity: UserEntity | UserEntity[],
  ): Promise<void> | Promise<UserEntity | UserEntity[]> {
    throw new Error("Method not implemented.");
  }
  delete(entity: UserEntity): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteAllByIds(ids: string[]): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteBulk(entity: UserEntity): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  transaction<T>(handler: () => Promise<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
