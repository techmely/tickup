import type { RepositoryPort } from "../../../../core/domain/repository.port";
import type { UserEntity } from "../entities/user.entity";

export interface IUserRepository extends RepositoryPort<UserEntity> {}
