import { verify as argon2Verify } from "argon2";
import { ValueObject } from "modules/core/domain-base/entities/value-object.base";

export interface IUserPassword {
  value: string;
}

export class UserProvider extends ValueObject<IUserPassword> {
  get value() {
    return this.props.value;
  }

  async comparePassword(plainPassword: string) {
    return argon2Verify(this.value, plainPassword);
  }

  protected validate(props: IUserPassword): void {}
}
