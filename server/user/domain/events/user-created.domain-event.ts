import { DomainEvent, IDomainEvent } from "server/core/domain/events/domain-event.base";
import { IUserCreatedDE, UserRoles, UserStatus } from "server/user/domain/entities/user.types";
import { UserMetadata } from "../value-objects/user-metadata.value-object";
import { UserProvider } from "../value-objects/user-providers.value-object";

export class UserCreatedDomainEvent extends DomainEvent implements IUserCreatedDE {
  email: string;
  unverifiedEmail: boolean;
  isEmailVerified: boolean;
  nickname: string;
  mobile: string;
  birthday: string;
  name: string;
  locale?: string | undefined;
  avatarUrl: string;
  gender?: string | undefined;
  provider?: UserProvider | undefined;
  role: UserRoles;
  status: UserStatus;
  metadata: UserMetadata;

  constructor(props: IDomainEvent<UserCreatedDomainEvent>) {
    super(props);
    this.email = props.email;
    this.unverifiedEmail = props.unverifiedEmail;
    this.isEmailVerified = props.isEmailVerified;
    this.nickname = props.nickname;
    this.mobile = props.mobile;
    this.birthday = props.birthday;
    this.name = props.name;
    this.locale = props.locale;
    this.avatarUrl = props.avatarUrl;
    this.gender = props.gender;
    this.provider = props.provider;
    this.role = props.role;
    this.status = props.status;
    this.metadata = props.metadata;
  }
}
