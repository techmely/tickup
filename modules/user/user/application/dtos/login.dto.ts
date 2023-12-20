import type { LoginEmailPasswordCommand } from "../../domain/use-cases/port/login-email-password.in-port";

export interface LoginEmailPasswordDTO extends LoginEmailPasswordCommand {}

export interface LoginEmailPasswordDtoResponse {
  accessToken: string;
  refreshToken: string;
}
