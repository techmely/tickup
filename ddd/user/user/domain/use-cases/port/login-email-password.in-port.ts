import type { UseCase } from "../../../../../core/domain/use-cases.port.base";
import type { UserEntity } from "../../entities/user.entity";

export interface LoginEmailPasswordCommand {
  username: string;
  password: string;
}

export abstract class LoginEmailPasswordInPort
  implements UseCase<LoginEmailPasswordCommand, UserEntity>
{
  abstract execute(loginCommand: LoginEmailPasswordCommand): Promise<UserEntity>;
}
