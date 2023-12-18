import { ValueObject } from "server/core/domain/entities/value-object.base";

export interface UserProviderVO {
  githubId?: string;
  googleId?: string;
  facebookId?: string;
  appleId?: string;
}

export class UserProvider extends ValueObject<UserProviderVO> {
  protected validate(props: UserProviderVO): void {}
}
