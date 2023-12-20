import type { MarkOptional, OmitProperties } from "ts-essentials";
import type { UserMetadata } from "../value-objects/user-metadata.value-object";
import { UserProvider } from "../value-objects/user-providers.value-object";

export interface UserProps {
  email: string;
  unverifiedEmail: string;
  isEmailVerified: boolean;
  nickname: string;
  mobile: string;
  birthday: string;
  name: string;
  avatarUrl: string;
  locale?: string;
  gender?: string;
  role: UserRoles;
  status: UserStatus;
  metadata?: UserMetadata;
  provider?: UserProvider;
}

// Properties that are needed for a user creation
export interface CreateUserProps extends MarkOptional<UserProps, "role" | "status"> {}

export interface IUserCreatedDE extends UserProps {}
export interface IUserUpdatedDE
  extends OmitProperties<Partial<UserProps>, "provider" | "roles" | "status" | "metadata"> {}

export enum UserRoles {
  SUPER_ADMIN = "SUPER_ADMIN",
  MODERATOR = "MODERATOR",
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  GUEST = "GUEST",
}

export enum UserStatus {
  VERIFIED = "VERIFIED",
  BLACKLIST = "BLACKLIST",
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
}
