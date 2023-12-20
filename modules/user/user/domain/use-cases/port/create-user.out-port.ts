import type { UserEntity } from "../../entities/user.entity";

export abstract class CreateUserOutPort {
  abstract insert(user: UserEntity): Promise<UserEntity>;
}
