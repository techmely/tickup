import { consola } from "consola";
import type { Emitter } from "mitt";
import type { EmitDomainEvents } from "modules/core/domain-base/events/domain-event.types";
import { MySQLRepositoryBase } from "modules/core/infra-base/persistence/repo/repository.mysql.base";
import type { UserEntity } from "modules/user/user/domain/entities/user.entity";
import type { UserModel } from "modules/user/user/domain/repo/user.model";
import type { IUserRepository } from "modules/user/user/domain/repo/user.repository";
import type { UserMapper } from "../../mappers/user.mapper";
import { getDBClient } from "./plannet-scale.config";

export class UserPlanetScaleRepository
  extends MySQLRepositoryBase<UserEntity, UserModel, { users: UserModel }>
  implements IUserRepository
{
  protected tableName = "users";
  protected db = getDBClient();

  constructor(mapper: UserMapper, emitter: Emitter<EmitDomainEvents>) {
    super(mapper, emitter, consola);
  }
}
