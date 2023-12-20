import { UserEntity } from "../../entities/user.entity";
import type { CreateUserCommand, CreateUserInPort } from "../port/create-user.in-port";
import type { CreateUserOutPort } from "../port/create-user.out-port";

export class CreateUserInteractor implements CreateUserInPort {
  constructor(private readonly createUserPort: CreateUserOutPort) {}

  execute(command: CreateUserCommand): Promise<UserEntity> {
    const user = UserEntity.create(command);
    return this.createUserPort.insert(user);
  }
}
