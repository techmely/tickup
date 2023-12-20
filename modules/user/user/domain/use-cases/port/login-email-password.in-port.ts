import type { UseCase } from "modules/core/domain-base/use-cases.port.base";

export interface LoginEmailPasswordCommand {
  username: string;
  password: string;
}

export abstract class LoginEmailPasswordInPort implements UseCase<LoginEmailPasswordCommand, void> {
  abstract execute(loginCommand: LoginEmailPasswordCommand): Promise<void>;
}
