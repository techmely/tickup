import type { UserEntity } from "../../entities/user.entity";

export abstract class GetCurrentUserOutPort {
  abstract getCurrentUser(): Promise<UserEntity>;
}
