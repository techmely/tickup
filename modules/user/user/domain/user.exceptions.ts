import { ExceptionBase } from "modules/core/exceptions/exception.base";

const EMAIL_NOT_FOUND = "USER.EMAIL_NOT_FOUND";
const USERNAME_NOT_FOUND = "USER.USERNAME_NOT_FOUND";

export class UserEmailDoNotExistException extends ExceptionBase {
  readonly code = EMAIL_NOT_FOUND;
}

export class UserNameDoNotExistException extends ExceptionBase {
  readonly code = USERNAME_NOT_FOUND;
}
