import type { UserEntity } from "../../entities/user.entity";

export abstract class FindUserByNicknameOutPort {
  abstract findUserByNickname(nickname: string): Promise<UserEntity>;
}
