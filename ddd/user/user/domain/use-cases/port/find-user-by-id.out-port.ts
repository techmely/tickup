import type { UserEntity } from "../../entities/user.entity";

export abstract class FindUserByIdOutPort {
  abstract findUserById(userId: string): Promise<UserEntity>;
}
