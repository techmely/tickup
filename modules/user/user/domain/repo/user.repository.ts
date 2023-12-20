import type { RepositoryPort } from "modules/core/domain-base/repository.port";
import type { UserEntity } from "../entities/user.entity";

export interface IUserRepository extends RepositoryPort<UserEntity> {}
