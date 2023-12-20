import { DomainEvent, type IDomainEvent } from "modules/core/domain/events/domain-event.base";
import type { IUserUpdatedDE } from "../entities/user.types";

export class UserUpdatedDomainEvent extends DomainEvent implements IUserUpdatedDE {
  email?: string;
  unverifiedEmail?: string;
  isEmailVerified?: boolean;
  nickname?: string;
  mobile?: string;
  birthday?: string;
  name?: string;
  locale?: string | undefined;
  avatarUrl?: string;
  gender?: string | undefined;

  constructor(props: IDomainEvent<UserUpdatedDomainEvent>) {
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
  }
}
