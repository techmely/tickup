import { UserEntity } from "../../entities/user.entity";
import type {
  LoginEmailPasswordCommand,
  LoginEmailPasswordInPort,
} from "../port/login-email-password.in-port";
import type { LoginEmailPasswordOutPort } from "../port/login-email-password.out-port";

export class LoginEmailPasswordInteractor implements LoginEmailPasswordInPort {
  constructor(private readonly loginEmailPasswordPort: LoginEmailPasswordOutPort) {}

  async execute(command: LoginEmailPasswordCommand) {
    const isEmailExist = await this.loginEmailPasswordPort.findByKey("email");
    const isValidPassword = true;
    const accessToken = "accessToken";
    const refreshToken = "refreshToken";
    // return this.loginEmailPasswordPort.insert(user);
  }
}
