import type { UseCase } from "modules/core/domain/use-cases.port.base";
import type { UserEntity } from "../../entities/user.entity";
import type { CreateUserProps } from "../../entities/user.types";

export interface CreateUserCommand extends CreateUserProps {}

export abstract class CreateUserInPort implements UseCase<CreateUserCommand, UserEntity> {
  abstract execute(createUserCommand: CreateUserCommand): Promise<UserEntity>;
}
