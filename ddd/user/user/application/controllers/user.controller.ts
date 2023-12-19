import type { CreateUserInPort } from "../../domain/use-cases/port/create-user.in-port";
import type { LoginEmailPasswordInPort } from "../../domain/use-cases/port/login-email-password.in-port";
import type { CreateUserDto } from "../dtos/create-user.dto";
import type { LoginEmailPasswordDTO } from "../dtos/login.dto";

export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserInPort,
    private readonly loginEmailPasswordUseCase: LoginEmailPasswordInPort,
  ) {}

  createUser(body: CreateUserDto) {
    return this.createUserUseCase.execute(body);
  }

  loginEmailPassword(body: LoginEmailPasswordDTO) {
    return this.loginEmailPasswordUseCase.execute(body);
  }
}
